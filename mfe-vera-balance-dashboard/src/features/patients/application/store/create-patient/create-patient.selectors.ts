import type { RootState } from '../../../../../store/store';

const normalizeValue = (value: string): string => {
	return value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim();
};

export const selectCreatePatientPersonalData = (state: RootState) => state.createPatient.personalData;
export const selectCreatePatientTherapyData = (state: RootState) => state.createPatient.therapyData;
export const selectCreatePatientGuardianData = (state: RootState) => state.createPatient.guardianData;
export const selectCreatePatientPartnerData = (state: RootState) => state.createPatient.partnerData;
export const selectCreatePatientSecondPatientData = (state: RootState) => state.createPatient.secondPatientData;

export const selectHasSelectedTherapyType = (state: RootState): boolean => {
	return Boolean(state.createPatient.therapyData.therapyType);
};

export const selectIsMinor = (state: RootState): boolean => {
	const age = Number(state.createPatient.personalData.age);
	return Number.isFinite(age) && age > 0 && age < 18;
};

export const selectHasPartner = (state: RootState): boolean => {
	const maritalStatus = normalizeValue(state.createPatient.personalData.maritalStatus);

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
	const therapyType = normalizeValue(state.createPatient.therapyData.therapyType);

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