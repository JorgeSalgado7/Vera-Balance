import { configureStore } from '@reduxjs/toolkit';

import { patientsReducer } from '../features/patients/application/store/patients.slice';
import patientFormReducer from '../features/patients/application/store/patient-form/patient-form.slice';

export const store = configureStore({
	reducer: {
		patients: patientsReducer,
		patientForm: patientFormReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;