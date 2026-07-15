import type { PatientStatus } from '../interfaces/patient.interface';

interface PatientStatusConfig {
	label: string;
	color: string;
}

export const PATIENT_STATUS_CONFIG: Record<PatientStatus,PatientStatusConfig> = {
	active: {
		label: 'Activo',
		color: 'success',
	},
	inactive: {
		label: 'Inactivo',
		color: 'warning',
	},
	discharged: {
		label: 'Dado de alta',
		color: 'default',
	},
};