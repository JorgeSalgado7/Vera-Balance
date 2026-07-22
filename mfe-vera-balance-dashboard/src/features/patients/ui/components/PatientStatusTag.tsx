import { Tag } from 'antd';
import { patientStatus, type PatientStatus } from '../../../../common/catalogs/patient-status.catalog';

interface PatientStatusTagProps { status: PatientStatus }

export const PatientStatusTag = ({ status }: PatientStatusTagProps) => {
	const statusConfig = patientStatus.find( (catalogItem) => catalogItem.value === status);

	if (!statusConfig) {
		return null;
	}

	return (
		<Tag color={statusConfig.color} className="patient_status_tag">
			{statusConfig.label}
		</Tag>
	);
};