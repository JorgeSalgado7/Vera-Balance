import type { RootState } from '../../../../../store/store';

//* Catalogs
import { MARITAL_STATUS } from '../../../../../common/catalogs/marritage.catalog';
import { THERAPY_TYPE } from '../../../../../common/catalogs/therapy-type.catalog';

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
	const maritalStatus = state.patientForm.personalData.maritalStatus;
	return maritalStatus === MARITAL_STATUS.IN_RELATIONSHIP || maritalStatus === MARITAL_STATUS.MARRIED;
};

export const selectIsCouplesTherapy = (state: RootState): boolean => {
	return state.patientForm.therapyData.therapyType === THERAPY_TYPE.COUPLE;
};

export const selectIsChildTherapy = (state: RootState): boolean => {
	return state.patientForm.therapyData.therapyType === THERAPY_TYPE.CHILD;
};

export const selectShouldShowGuardianData = (state: RootState): boolean => {
	return selectHasSelectedTherapyType(state) && (selectIsMinor(state) || selectIsChildTherapy(state));
};

export const selectShouldShowPartnerData = (state: RootState): boolean => {
	return selectHasSelectedTherapyType(state) && selectHasPartner(state) && !selectIsCouplesTherapy(state);
};

export const selectShouldShowSecondPatientData = (state: RootState): boolean => {
	return selectHasSelectedTherapyType(state) && selectIsCouplesTherapy(state);
};