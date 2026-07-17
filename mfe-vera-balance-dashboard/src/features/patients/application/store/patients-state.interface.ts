import type { PatientListItem } from '../../domain/interfaces/patient.interface';

export interface PatientsState {
	patients: PatientListItem[];
	selectedPatient: PatientListItem | null;
	isLoading: boolean;
	error: string | null;
}