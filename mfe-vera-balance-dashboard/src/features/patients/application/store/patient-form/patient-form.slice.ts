import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { patientFormInitialState } from './patient-form.initial-state';

import type {
	PatientFormState,
	PatientGuardianData,
	PatientPartnerData,
	PatientPersonalData,
	PatientTherapyData,
	SecondPatientData
} from './patient-form-state.interface';

const normalizeValue = (value: string): string => {
	return value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim();
};

const isMinor = (age: string): boolean => {
	const numericAge = Number(age);
	return Number.isFinite(numericAge) && numericAge > 0 && numericAge < 18;
};

const hasPartner = (maritalStatus: string): boolean => {
	const normalizedMaritalStatus = normalizeValue(maritalStatus);

	return [
		'casado',
		'casada',
		'married',
		'en una relacion',
		'en pareja',
		'relationship'
	].includes(normalizedMaritalStatus);
};

const isCouplesTherapy = (therapyType: string): boolean => {
	const normalizedTherapyType = normalizeValue(therapyType);

	return [
		'pareja',
		'couple',
		'couples',
		'terapia de pareja'
	].includes(normalizedTherapyType);
};

export const patientFormSlice = createSlice({
	name: 'patientForm',
	initialState: patientFormInitialState,
	reducers: {
		setPatientForm: (_state, action: PayloadAction<PatientFormState>) => {
			return action.payload;
		},
		updatePersonalData: (state, action: PayloadAction<Partial<PatientPersonalData>>) => {
			state.personalData = { ...state.personalData, ...action.payload };

			if (action.payload.age !== undefined && !isMinor(state.personalData.age)) {
				state.guardianData = patientFormInitialState.guardianData;
			}

			if (action.payload.maritalStatus !== undefined && (!hasPartner(state.personalData.maritalStatus) || isCouplesTherapy(state.therapyData.therapyType))) {
				state.partnerData = patientFormInitialState.partnerData;
			}
		},
		updateTherapyData: (state, action: PayloadAction<Partial<PatientTherapyData>>) => {
			state.therapyData = { ...state.therapyData, ...action.payload };

			if (action.payload.therapyType !== undefined) {
				if (isCouplesTherapy(state.therapyData.therapyType)) {
					state.partnerData = patientFormInitialState.partnerData;
				} else {
					state.secondPatientData = patientFormInitialState.secondPatientData;
				}
			}
		},
		updateGuardianData: (state, action: PayloadAction<Partial<PatientGuardianData>>) => {
			state.guardianData = { ...state.guardianData, ...action.payload };
		},
		updatePartnerData: (state, action: PayloadAction<Partial<PatientPartnerData>>) => {
			state.partnerData = { ...state.partnerData, ...action.payload };
		},
		updateSecondPatientData: (state, action: PayloadAction<Partial<SecondPatientData>>) => {
			state.secondPatientData = { ...state.secondPatientData, ...action.payload };
		},
		resetPatientForm: () => {
			return patientFormInitialState;
		}
	}
});

export const {
	setPatientForm,
	updatePersonalData,
	updateTherapyData,
	updateGuardianData,
	updatePartnerData,
	updateSecondPatientData,
	resetPatientForm
} = patientFormSlice.actions;

export default patientFormSlice.reducer;