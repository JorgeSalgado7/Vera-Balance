import { useMemo, useState } from 'react';
import {
	Avatar,
	Button,
	Dropdown,
	Empty,
	Input,
	Modal,
	Table,
	type MenuProps,
	type TableColumnsType,
} from 'antd';
import {
	EllipsisOutlined,
	EyeOutlined,
	EditOutlined,
	PauseCircleOutlined,
	PlayCircleOutlined,
	PlusOutlined,
	SearchOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router';
import { DasboardLayout } from '../Layouts/DashboardLayouts/DasboardLayout';
import { VBCard } from '../Components/VBCard';
import { PatientStatusTag } from '../../features/patients/components/PatientStatusTag';
import { PatientTherapyTypes } from '../../features/patients/components/PatientTherapyTypes';
import { usePatients } from '../../features/patients/application/hooks/usePatients';
import type { PatientListItem } from '../../features/patients/domain/interfaces/patient.interface';
import { PATIENT_STATUS, type PatientStatus } from '../../common/catalogs/patient-status.catalog';
import type { TherapyType } from '../../common/catalogs/therapy-type.catalog';
import { ROUTES } from '../../common/constants/routes.constant';

const normalizeText = (value: string): string => {
	return value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim();
};

const getPatientInitials = (name: string): string => {
	return name
		.split(' ')
		.filter(Boolean)
		.slice(0, 2)
		.map((word) => word.charAt(0))
		.join('')
		.toUpperCase();
};

const formatLastSession = (date: string | null): string => {
	if (!date) {
		return 'Sin sesiones';
	}

	return new Intl.DateTimeFormat('es-MX', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	}).format(new Date(`${date}T12:00:00`));
};

export const Patients = () => {
	const navigate = useNavigate();

	const { patients, isLoading, handleChangePatientStatus } = usePatients();

	const [search, setSearch] = useState('');

	const filteredPatients = useMemo(() => {
		const normalizedSearch = normalizeText(search);

		if (!normalizedSearch) {
			return patients;
		}

		return patients.filter((patient) => normalizeText(patient.name).includes(normalizedSearch));
	}, [patients, search]);

	const handleStatusChange = (patient: PatientListItem, nextStatus: PatientStatus) => {
		const isActivation = nextStatus === PATIENT_STATUS.ACTIVE;

		Modal.confirm({
			title: isActivation ? '¿Deseas reactivar al paciente?' : '¿Deseas desactivar al paciente?',
			content: patient.name,
			okText: isActivation ? 'Reactivar' : 'Desactivar',
			cancelText: 'Cancelar',
			centered: true,
			okButtonProps: { danger: !isActivation },
			onOk: () => { handleChangePatientStatus(patient.id, nextStatus);
			},
		});
	};

	const getPatientActions = (patient: PatientListItem): MenuProps['items'] => {
		const canReactivate = patient.status === PATIENT_STATUS.INACTIVE;

		const statusAction: NonNullable<MenuProps['items']>[number] =
			canReactivate
				? {
						key: 'activate',
						icon: <PlayCircleOutlined />,
						label: 'Reactivar paciente',
						onClick: () => handleStatusChange(patient, PATIENT_STATUS.ACTIVE),
					}
				: {
						key: 'deactivate',
						icon: <PauseCircleOutlined />,
						label: 'Desactivar paciente',
						danger: true,
						onClick: () => handleStatusChange(patient, PATIENT_STATUS.INACTIVE),
					};

		return [
			{
				key: 'record',
				icon: <EyeOutlined />,
				label: 'Ver expediente',
				onClick: () => navigate(ROUTES.PATIENTS.DETAIL(patient.id)),
			},
			{
				key: 'edit',
				icon: <EditOutlined />,
				label: 'Editar paciente',
				onClick: () => navigate(`${ROUTES.PATIENTS.EDIT(patient.id)}`),
			},
			{
				type: 'divider',
			},
			statusAction,
		];
	};

	const columns: TableColumnsType<PatientListItem> = [
		{
			title: 'Nombre',
			dataIndex: 'name',
			key: 'name',
			fixed: 'left',
			width: 260,
			render: (_, patient) => (
				<button
					type="button"
					className="patient_name"
					onClick={() => navigate(ROUTES.PATIENTS.DETAIL(patient.id))}
				>
					<Avatar className="patient_name__avatar">
						{getPatientInitials(patient.name)}
					</Avatar>

					<span className="patient_name__text">
						{patient.name}
					</span>
				</button>
			),
		},
		{
			title: 'Tipo de terapia',
			dataIndex: 'therapyTypes',
			key: 'therapyTypes',
			width: 320,
			responsive: ['md'],
			render: (therapyTypes: TherapyType[]) => (
				<PatientTherapyTypes therapyTypes={therapyTypes} />
			),
		},
		{
			title: 'Última sesión',
			dataIndex: 'lastSessionAt',
			key: 'lastSessionAt',
			width: 180,
			responsive: ['sm'],
			render: (lastSessionAt: string | null) => (
				<span className={ lastSessionAt ? 'patient_last_session' : 'patient_last_session patient_last_session--empty' }>
					{formatLastSession(lastSessionAt)}
				</span>
			),
		},
		{
			title: 'Estado',
			dataIndex: 'status',
			key: 'status',
			width: 140,
			render: (status: PatientStatus) => (
				<PatientStatusTag status={status} />
			),
		},
		{
			title: 'Acciones',
			key: 'actions',
			align: 'center',
			width: 100,
			fixed: 'right',
			render: (_, patient) => (
				<Dropdown
					menu={{ items: getPatientActions(patient) }}
					trigger={['click']}
					placement="bottomRight"
				>
					<Button
						type="text"
						shape="circle"
						icon={ <EllipsisOutlined /> }
						aria-label={`Acciones de ${patient.name}`}
					/>
				</Dropdown>
			),
		},
	];

	return (
		<DasboardLayout>
			<div className="patients">
				<VBCard customClass="patients__table">
					<div className="patients__table__header">
						<div>
							<h2>Mis pacientes</h2>
							<p>Consulta y administra los expedientes de tus pacientes.</p>
						</div>

						<Link to={ROUTES.PATIENTS.CREATE} className="vb_btn vb_btn-sm vb_btn--pink">
							<PlusOutlined />
							Crear paciente
						</Link>
					</div>

					<div className="patients__table__tools">
						<p className="patients__table__tools__count">
							Pacientes encontrados:{' '}
							<strong>{ filteredPatients.length }</strong>
						</p>

						<Input
							allowClear
							value={search}
							prefix={ <SearchOutlined /> }
							placeholder="Busca un paciente por nombre..."
							className="patients__table__search"
							onChange={ (event) => setSearch(event.target.value) }
						/>
					</div>

					<Table<PatientListItem>
						rowKey="id"
						loading={isLoading}
						dataSource={ filteredPatients }
						columns={columns}
						scroll={{ x: 760 }}
						pagination={{
							pageSize: 10,
							showSizeChanger: false,
							position: ['bottomCenter'],
							hideOnSinglePage: true,
						}}
						locale={{
							emptyText: (
								<Empty
									image={ Empty.PRESENTED_IMAGE_SIMPLE }
									description={ search ? 'No encontramos pacientes con ese nombre.' : 'Aún no tienes pacientes registrados.' }
								>
									{!search && (
										<Link to={ROUTES.PATIENTS.CREATE} className="vb_btn vb_btn-sm vb_btn--pink">
											Crear primer paciente
										</Link>
									)}
								</Empty>
							),
						}}
					/>
				</VBCard>
			</div>
		</DasboardLayout>
	);
};