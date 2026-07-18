import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { createPatientInitialState } from './create-patient.initial-state';
import type {
	CreatePatientPartnerData,
	CreatePatientPersonalData,
	CreatePatientResponsibleData,
	CreatePatientSecondPatientData,
	CreatePatientTherapyData,
} from './create-patient-state.interface';

export const createPatientSlice = createSlice({
	name: 'createPatient',
	initialState: createPatientInitialState,
	reducers: {
		updatePersonalData: (state, action: PayloadAction<Partial<CreatePatientPersonalData>>) => {
			state.personalData = { ...state.personalData,...action.payload };
		},
		updateTherapyData: (	state,	action: PayloadAction<Partial<CreatePatientTherapyData>>) => {
			state.therapyData = { ...state.therapyData, ...action.payload };
		},
		updateResponsibleData: (	state, action: PayloadAction<Partial<CreatePatientResponsibleData>>) => {
			state.responsibleData = { ...state.responsibleData, ...action.payload };
		},
		updatePartnerData: (state, action: PayloadAction<Partial<CreatePatientPartnerData>>) => {
			state.partnerData = { ...state.partnerData, ...action.payload };
		},
		updateSecondPatientData: (state, action: PayloadAction<Partial<CreatePatientSecondPatientData>>) => {
			state.secondPatientData = { ...state.secondPatientData, ...action.payload };
		},
		resetCreatePatient: () => {
			return createPatientInitialState;
		},
	},
});

export const {
	updatePersonalData,
	updateTherapyData,
	updateResponsibleData,
	updatePartnerData,
	updateSecondPatientData,
	resetCreatePatient,
} = createPatientSlice.actions;

export default createPatientSlice.reducer;