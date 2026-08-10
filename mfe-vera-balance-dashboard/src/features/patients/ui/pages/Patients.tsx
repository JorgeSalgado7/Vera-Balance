import { useMemo, useState } from 'react';
import {
	Avatar,
	Button,
	Dropdown,
	Grid,
	Table,
	type MenuProps,
	type TableColumnsType
} from 'antd';
import {
	EllipsisOutlined,
	EyeOutlined,
	EditOutlined,
	PauseCircleOutlined,
	PlayCircleOutlined,
	PlusOutlined
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router';

//* Components
import { DasboardLayout } from '../../../../ui/Layouts/DashboardLayouts/DasboardLayout';
import { VBCard } from '../../../../ui/Components/VBCard';
import { VBPageHeader } from '../../../../ui/Components/VBPageHeader';
import { VBPageTools } from '../../../../ui/Components/VBPageTools';
import { VBSearchInput } from '../../../../ui/Components/VBSearchInput';
import { VBEmptyState } from '../../../../ui/Components/VBEmptyState';
import { VBConfirmModal } from '../../../../ui/Components/Modals/VBConfirmModal';
import { PatientStatusTag } from '../components/PatientStatusTag';
import { PatientTherapyTypes } from '../components/PatientTherapyTypes';

//* Hooks
import { usePatients } from '../../hooks/usePatients';

//* Interfaces
import type { PatientListItem } from '../../domain/interfaces/patient.interface';

//* Catalogs
import { PATIENT_STATUS, type PatientStatus } from '../../../../common/catalogs/patient-status.catalog';
import type { TherapyType } from '../../../../common/catalogs/therapy-type.catalog';

//* Constants
import { ROUTES } from '../../../../common/constants/routes.constant';

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
		year: 'numeric'
	}).format(new Date(`${date}T12:00:00`));
};

export const Patients = () => {
	const navigate = useNavigate();
	const screens = Grid.useBreakpoint();

	const { patients, isLoading, handleChangePatientStatus } = usePatients();

	const [search, setSearch] = useState('');
	const [patientToChangeStatus, setPatientToChangeStatus] = useState<PatientListItem | null>(null);
	const [nextPatientStatus, setNextPatientStatus] = useState<PatientStatus | null>(null);

	const filteredPatients = useMemo(() => {
		const normalizedSearch = normalizeText(search);

		if (!normalizedSearch) {
			return patients;
		}

		return patients.filter((patient) => normalizeText(patient.name).includes(normalizedSearch));
	}, [patients, search]);

	const handleOpenStatusModal = (patient: PatientListItem, nextStatus: PatientStatus) => {
		setPatientToChangeStatus(patient);
		setNextPatientStatus(nextStatus);
	};

	const handleCloseStatusModal = () => {
		setPatientToChangeStatus(null);
		setNextPatientStatus(null);
	};

	const handleConfirmStatusChange = () => {
		if (!patientToChangeStatus || !nextPatientStatus) {
			return;
		}

		handleChangePatientStatus(patientToChangeStatus.id, nextPatientStatus);
		handleCloseStatusModal();
	};

	const getPatientActions = (patient: PatientListItem): MenuProps['items'] => {
		const canReactivate = patient.status === PATIENT_STATUS.INACTIVE;

		const statusAction: NonNullable<MenuProps['items']>[number] =
			canReactivate
				? {
						key: 'activate',
						icon: <PlayCircleOutlined />,
						label: 'Reactivar paciente',
						onClick: () => handleOpenStatusModal(patient, PATIENT_STATUS.ACTIVE)
					}
				: {
						key: 'deactivate',
						icon: <PauseCircleOutlined />,
						label: 'Desactivar paciente',
						danger: true,
						onClick: () => handleOpenStatusModal(patient, PATIENT_STATUS.INACTIVE)
					};

		return [
			{
				key: 'record',
				icon: <EyeOutlined />,
				label: 'Ver expediente',
				onClick: () => navigate(ROUTES.PATIENTS.DETAIL(patient.id))
			},
			{
				key: 'edit',
				icon: <EditOutlined />,
				label: 'Editar paciente',
				onClick: () => navigate(ROUTES.PATIENTS.EDIT(patient.id))
			},
			{
				type: 'divider'
			},
			statusAction
		];
	};

	const mobileColumns: TableColumnsType<PatientListItem> = [
		{
			key: 'patientMobile',
			render: (_, patient) => {
				const canReactivate = patient.status === PATIENT_STATUS.INACTIVE;

				return (
					<div className="patient_mobile">

						<Link
							to={ROUTES.PATIENTS.DETAIL(patient.id)}
							className="patient_mobile__name"
						>
							{patient.name}
						</Link>

						<PatientTherapyTypes therapyTypes={patient.therapyTypes} />

						<div className="patient_mobile__actions">

							<Link to={ROUTES.PATIENTS.EDIT(patient.id)}>
								Editar
							</Link>

							<span>|</span>

							<button
								type="button"
								onClick={() => handleOpenStatusModal(
									patient,
									canReactivate
										? PATIENT_STATUS.ACTIVE
										: PATIENT_STATUS.INACTIVE
								)}
							>
								{canReactivate ? 'Reactivar' : 'Desactivar'}
							</button>

						</div>

					</div>
				)
			}
		}
	];

	const desktopColumns: TableColumnsType<PatientListItem> = [
		{
			title: 'Nombre',
			dataIndex: 'name',
			key: 'name',
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
			)
		},
		{
			title: 'Tipo de terapia',
			dataIndex: 'therapyTypes',
			key: 'therapyTypes',
			width: 320,
			render: (therapyTypes: TherapyType[]) => (
				<PatientTherapyTypes therapyTypes={therapyTypes} />
			)
		},
		{
			title: 'Última sesión',
			dataIndex: 'lastSessionAt',
			key: 'lastSessionAt',
			width: 180,
			render: (lastSessionAt: string | null) => (
				<span className={lastSessionAt ? 'patient_last_session' : 'patient_last_session patient_last_session--empty'}>
					{formatLastSession(lastSessionAt)}
				</span>
			)
		},
		{
			title: 'Estado',
			dataIndex: 'status',
			key: 'status',
			width: 140,
			render: (status: PatientStatus) => (
				<PatientStatusTag status={status} />
			)
		},
		{
			title: 'Acciones',
			key: 'actions',
			align: 'center',
			width: 100,
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
			)
		}
	];

	const columns = screens.md ? desktopColumns : mobileColumns;

	const isActivation = nextPatientStatus === PATIENT_STATUS.ACTIVE;

	return (
		<DasboardLayout>

			<div className="patients">

				<VBCard customClass="patients__table">

					<VBPageHeader
						title="Mis pacientes"
						description="Consulta y administra los expedientes de tus pacientes."
					>
						<Link to={ROUTES.PATIENTS.CREATE} className="vb_btn vb_btn-sm vb_btn--pink">
							<PlusOutlined />
							Crear paciente
						</Link>
					</VBPageHeader>

					<VBPageTools>

						<p className="patients__table__count">
							Pacientes encontrados:{' '}
							<strong>{ filteredPatients.length }</strong>
						</p>

						<VBSearchInput
							value={search}
							placeholder="Busca un paciente por nombre..."
							onChange={setSearch}
						/>

					</VBPageTools>

					<Table<PatientListItem>
						rowKey="id"
						loading={isLoading}
						dataSource={filteredPatients}
						columns={columns}
						pagination={{
							pageSize: 10,
							showSizeChanger: false,
							position: ['bottomCenter'],
							hideOnSinglePage: true
						}}
						locale={{
							emptyText: (
								<VBEmptyState description={search ? 'No encontramos pacientes con ese nombre.' : 'Aún no tienes pacientes registrados.'}>
									{ !search &&
										<Link to={ROUTES.PATIENTS.CREATE} className="vb_btn vb_btn-sm vb_btn--pink">
											Crear primer paciente
										</Link>
									}
								</VBEmptyState>
							)
						}}
					/>

				</VBCard>

			</div>

			<VBConfirmModal
				isOpen={patientToChangeStatus !== null}
				title={isActivation ? '¿Deseas reactivar al paciente?' : '¿Deseas desactivar al paciente?'}
				description={patientToChangeStatus?.name}
				icon={isActivation ? 'person-check' : 'person-dash'}
				iconColor={isActivation ? 'pink' : 'red'}
				confirmText={isActivation ? 'Reactivar' : 'Desactivar'}
				confirmButtonType={isActivation ? 'pink' : 'red'}
				onConfirm={handleConfirmStatusChange}
				onCancel={handleCloseStatusModal}
			/>

		</DasboardLayout>
	);
};