import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import {
	resetCreatePatient,
	updateGuardianData,
	updatePartnerData,
	updatePersonalData,
	updateSecondPatientData,
	updateTherapyData
} from '../application/store/create-patient/create-patient.slice';

import {
	selectCreatePatientGuardianData,
	selectCreatePatientPartnerData,
	selectCreatePatientPersonalData,
	selectCreatePatientSecondPatientData,
	selectCreatePatientTherapyData,
	selectHasSelectedTherapyType,
	selectShouldShowGuardianData,
	selectShouldShowPartnerData,
	selectShouldShowSecondPatientData
} from '../application/store/create-patient/create-patient.selectors';

import type {
	CreatePatientGuardianData,
	CreatePatientPartnerData,
	CreatePatientPersonalData,
	CreatePatientSecondPatientData,
	CreatePatientTherapyData
} from '../application/store/create-patient/create-patient-state.interface';

export const useCreatePatient = () => {
	const dispatch = useAppDispatch();

	const personalData = useAppSelector(selectCreatePatientPersonalData);
	const therapyData = useAppSelector(selectCreatePatientTherapyData);
	const guardianData = useAppSelector(selectCreatePatientGuardianData);
	const partnerData = useAppSelector(selectCreatePatientPartnerData);
	const secondPatientData = useAppSelector(selectCreatePatientSecondPatientData);

	const hasSelectedTherapyType = useAppSelector(selectHasSelectedTherapyType);
	const shouldShowGuardianData = useAppSelector(selectShouldShowGuardianData);
	const shouldShowPartnerData = useAppSelector(selectShouldShowPartnerData);
	const shouldShowSecondPatientData = useAppSelector(selectShouldShowSecondPatientData);

	const handleUpdatePersonalData = useCallback((data: Partial<CreatePatientPersonalData>) => { dispatch(updatePersonalData(data)) }, [dispatch]);
	const handleUpdateTherapyData = useCallback((data: Partial<CreatePatientTherapyData>) => { dispatch(updateTherapyData(data)) }, [dispatch]);
	const handleUpdateGuardianData = useCallback((data: Partial<CreatePatientGuardianData>) => { dispatch(updateGuardianData(data)) }, [dispatch]);
	const handleUpdatePartnerData = useCallback((data: Partial<CreatePatientPartnerData>) => { dispatch(updatePartnerData(data)) }, [dispatch]);
	const handleUpdateSecondPatientData = useCallback((data: Partial<CreatePatientSecondPatientData>) => { dispatch(updateSecondPatientData(data)) }, [dispatch]);
	const handleResetCreatePatient = useCallback(() => { dispatch(resetCreatePatient()) }, [dispatch]);

	return {
		personalData,
		therapyData,
		guardianData,
		partnerData,
		secondPatientData,
		hasSelectedTherapyType,
		shouldShowGuardianData,
		shouldShowPartnerData,
		shouldShowSecondPatientData,
		handleUpdatePersonalData,
		handleUpdateTherapyData,
		handleUpdateGuardianData,
		handleUpdatePartnerData,
		handleUpdateSecondPatientData,
		handleResetCreatePatient
	};
};