import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import {
	resetPatientForm,
	setPatientForm,
	updateGuardianData,
	updatePartnerData,
	updatePersonalData,
	updateSecondPatientData,
	updateTherapyData
} from '../application/store/patient-form/patient-form.slice';

import {
	selectHasSelectedTherapyType,
	selectPatientForm,
	selectPatientGuardianData,
	selectPatientPartnerData,
	selectPatientPersonalData,
	selectPatientTherapyData,
	selectSecondPatientData,
	selectShouldShowGuardianData,
	selectShouldShowPartnerData,
	selectShouldShowSecondPatientData
} from '../application/store/patient-form/patient-form.selectors';

import type {
	PatientFormState,
	PatientGuardianData,
	PatientPartnerData,
	PatientPersonalData,
	PatientTherapyData,
	SecondPatientData
} from '../application/store/patient-form/patient-form-state.interface';

export const usePatientForm = () => {
	const dispatch = useAppDispatch();

	const patientForm = useAppSelector(selectPatientForm);
	const personalData = useAppSelector(selectPatientPersonalData);
	const therapyData = useAppSelector(selectPatientTherapyData);
	const guardianData = useAppSelector(selectPatientGuardianData);
	const partnerData = useAppSelector(selectPatientPartnerData);
	const secondPatientData = useAppSelector(selectSecondPatientData);

	const hasSelectedTherapyType = useAppSelector(selectHasSelectedTherapyType);
	const shouldShowGuardianData = useAppSelector(selectShouldShowGuardianData);
	const shouldShowPartnerData = useAppSelector(selectShouldShowPartnerData);
	const shouldShowSecondPatientData = useAppSelector(selectShouldShowSecondPatientData);

	const handleSetPatientForm = useCallback((data: PatientFormState) => { dispatch(setPatientForm(data)) }, [dispatch]);
	const handleUpdatePersonalData = useCallback((data: Partial<PatientPersonalData>) => { dispatch(updatePersonalData(data)) }, [dispatch]);
	const handleUpdateTherapyData = useCallback((data: Partial<PatientTherapyData>) => { dispatch(updateTherapyData(data)) }, [dispatch]);
	const handleUpdateGuardianData = useCallback((data: Partial<PatientGuardianData>) => { dispatch(updateGuardianData(data)) }, [dispatch]);
	const handleUpdatePartnerData = useCallback((data: Partial<PatientPartnerData>) => { dispatch(updatePartnerData(data)) }, [dispatch]);
	const handleUpdateSecondPatientData = useCallback((data: Partial<SecondPatientData>) => { dispatch(updateSecondPatientData(data)) }, [dispatch]);
	const handleResetPatientForm = useCallback(() => { dispatch(resetPatientForm()) }, [dispatch]);

	return {
		patientForm,
		personalData,
		therapyData,
		guardianData,
		partnerData,
		secondPatientData,
		hasSelectedTherapyType,
		shouldShowGuardianData,
		shouldShowPartnerData,
		shouldShowSecondPatientData,
		handleSetPatientForm,
		handleUpdatePersonalData,
		handleUpdateTherapyData,
		handleUpdateGuardianData,
		handleUpdatePartnerData,
		handleUpdateSecondPatientData,
		handleResetPatientForm
	};
};