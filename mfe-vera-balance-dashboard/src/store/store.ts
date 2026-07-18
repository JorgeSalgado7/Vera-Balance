import { configureStore } from '@reduxjs/toolkit';
import { patientsReducer } from '../features/patients/application/store/patients.slice';
import createPatientReducer from '../features/patients/application/store/create-patient/create-patient.slice';

export const store = configureStore({
	reducer: {
		patients: patientsReducer,
		createPatient: createPatientReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;