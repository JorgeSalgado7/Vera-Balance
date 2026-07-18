import type { RootState } from '../../../../../store/store';

const normalizeValue = (value: string): string => {
	return value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim();
};

export const selectCreatePatient = (state: RootState) => state.createPatient;
export const selectCreatePatientPersonalData = (state: RootState) => state.createPatient.personalData;
export const selectCreatePatientTherapyData = (state: RootState) => state.createPatient.therapyData;
export const selectCreatePatientResponsibleData = (state: RootState) => state.createPatient.responsibleData;
export const selectCreatePatientPartnerData = (state: RootState) => state.createPatient.partnerData;
export const selectCreatePatientSecondPatientData = (state: RootState) => state.createPatient.secondPatientData;

export const selectIsMinor = (state: RootState): boolean => {
	const age = Number(state.createPatient.personalData.age);
	return Number.isFinite(age) && age > 0 && age < 18;
};

export const selectHasPartner = (state: RootState): boolean => {
	const maritalStatus = normalizeValue(
		state.createPatient.personalData.maritalStatus,
	);

	return [
		'casado',
		'casada',
		'en una relacion',
		'en pareja',
	].includes(maritalStatus);
};

export const selectIsCouplesTherapy = (state: RootState): boolean => {
	const therapyType = normalizeValue(state.createPatient.therapyData.therapyType);

	return [
		'pareja',
		'terapia de pareja',
	].includes(therapyType);
};

export const selectShouldShowResponsibleData = (state: RootState): boolean => {
	return selectIsMinor(state);
};

export const selectShouldShowPartnerData = (state: RootState): boolean => {
	return selectHasPartner(state) && !selectIsCouplesTherapy(state);
};

export const selectShouldShowSecondPatientData = (state: RootState): boolean => {
	return selectIsCouplesTherapy(state);
};