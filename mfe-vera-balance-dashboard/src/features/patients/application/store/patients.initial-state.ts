import type { PatientsState } from './patients-state.interface';

import { patientsMock } from '../../infrastructure/mocks/patients.mock';

export const patientsInitialState: PatientsState = {
	patients: patientsMock,
	selectedPatient: null,
	isLoading: false,
	error: null,
};