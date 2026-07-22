import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { patientsInitialState } from './patients.initial-state';

import type { PatientListItem } from '../../domain/interfaces/patient.interface';
import type { PatientStatus } from '../../../../common/catalogs/patient-status.catalog';

interface ChangePatientStatusPayload {
	patientId: string;
	status: PatientStatus;
}

const patientsSlice = createSlice({
	name: 'patients',
	initialState: patientsInitialState,
	reducers: {
		setPatients: (state, action: PayloadAction<PatientListItem[]>) => {
			state.patients = action.payload;
		},
		addPatient: (state, action: PayloadAction<PatientListItem>) => {
			state.patients.push(action.payload);
		},
		updatePatient: (state,action: PayloadAction<PatientListItem>) => {
			const patientIndex = state.patients.findIndex((patient) => patient.id === action.payload.id);

			if (patientIndex === -1) {
				return;
			}

			state.patients[patientIndex] = action.payload;

			if (state.selectedPatient?.id === action.payload.id) {
				state.selectedPatient = action.payload;
			}
		},
		changePatientStatus: (state, action: PayloadAction<ChangePatientStatusPayload>) => {
			const patient = state.patients.find((currentPatient) => currentPatient.id === action.payload.patientId);

			if (!patient) {
				return;
			}

			patient.status = action.payload.status;

			if (state.selectedPatient?.id === patient.id) {
				state.selectedPatient.status = action.payload.status;
			}
		},
		setSelectedPatient: (state, action: PayloadAction<PatientListItem | null>) => {
			state.selectedPatient = action.payload;
		},
		setPatientsLoading: (state,	action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setPatientsError: (state,action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},
		resetPatientsState: () => patientsInitialState,
	},
});

export const {
	setPatients,
	addPatient,
	updatePatient,
	changePatientStatus,
	setSelectedPatient,
	setPatientsLoading,
	setPatientsError,
	resetPatientsState,
} = patientsSlice.actions;

export const patientsReducer = patientsSlice.reducer;