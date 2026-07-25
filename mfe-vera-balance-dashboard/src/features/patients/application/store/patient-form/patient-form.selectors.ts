import type { RootState } from '../../../../../store/store';

const normalizeValue = (value: string): string => {
	return value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim();
};

export const selectPatientForm = (state: RootState) => state.patientForm;
export const selectPatientPersonalData = (state: RootState) => state.patientForm.personalData;
export const selectPatientTherapyData = (state: RootState) => state.patientForm.therapyData;
export const selectPatientGuardianData = (state: RootState) => state.patientForm.guardianData;
export const selectPatientPartnerData = (state: RootState) => state.patientForm.partnerData;
export const selectSecondPatientData = (state: RootState) => state.patientForm.secondPatientData;

export const selectHasSelectedTherapyType = (state: RootState): boolean => {
	return Boolean(state.patientForm.therapyData.therapyType);
};

export const selectIsMinor = (state: RootState): boolean => {
	const age = Number(state.patientForm.personalData.age);
	return Number.isFinite(age) && age > 0 && age < 18;
};

export const selectHasPartner = (state: RootState): boolean => {
	const maritalStatus = normalizeValue(state.patientForm.personalData.maritalStatus);

	return [
		'casado',
		'casada',
		'married',
		'en una relacion',
		'en pareja',
		'relationship'
	].includes(maritalStatus);
};

export const selectIsCouplesTherapy = (state: RootState): boolean => {
	const therapyType = normalizeValue(state.patientForm.therapyData.therapyType);

	return [
		'pareja',
		'couple',
		'couples',
		'terapia de pareja'
	].includes(therapyType);
};

export const selectShouldShowGuardianData = (state: RootState): boolean => {
	return selectHasSelectedTherapyType(state) && selectIsMinor(state);
};

export const selectShouldShowPartnerData = (state: RootState): boolean => {
	return selectHasSelectedTherapyType(state) && selectHasPartner(state) && !selectIsCouplesTherapy(state);
};

export const selectShouldShowSecondPatientData = (state: RootState): boolean => {
	return selectHasSelectedTherapyType(state) && selectIsCouplesTherapy(state);
};