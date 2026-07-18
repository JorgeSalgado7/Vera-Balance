import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

import {
	resetCreatePatient,
	updatePartnerData,
	updatePersonalData,
	updateResponsibleData,
	updateSecondPatientData,
	updateTherapyData,
} from '../store/create-patient/create-patient.slice';

import {
	selectCreatePatientPartnerData,
	selectCreatePatientPersonalData,
	selectCreatePatientResponsibleData,
	selectCreatePatientSecondPatientData,
	selectCreatePatientTherapyData,
	selectShouldShowPartnerData,
	selectShouldShowResponsibleData,
	selectShouldShowSecondPatientData,
} from '../store/create-patient/create-patient.selectors';

import type {
	CreatePatientPartnerData,
	CreatePatientPersonalData,
	CreatePatientResponsibleData,
	CreatePatientSecondPatientData,
	CreatePatientTherapyData,
} from '../store/create-patient/create-patient-state.interface';

export const useCreatePatient = () => {
	const dispatch = useAppDispatch();

	const personalData = useAppSelector(selectCreatePatientPersonalData);
	const therapyData = useAppSelector(selectCreatePatientTherapyData);
	const responsibleData = useAppSelector(selectCreatePatientResponsibleData);
	const partnerData = useAppSelector(selectCreatePatientPartnerData);
	const secondPatientData = useAppSelector(selectCreatePatientSecondPatientData);
	const shouldShowResponsibleData = useAppSelector(selectShouldShowResponsibleData);
	const shouldShowPartnerData = useAppSelector(selectShouldShowPartnerData);
	const shouldShowSecondPatientData = useAppSelector(selectShouldShowSecondPatientData);

	const handleUpdatePersonalData = useCallback((data: Partial<CreatePatientPersonalData>) => { dispatch(updatePersonalData(data)) }, [dispatch]);
	const handleUpdateTherapyData = useCallback((data: Partial<CreatePatientTherapyData>) => { dispatch(updateTherapyData(data)) }, [dispatch]);
	const handleUpdateResponsibleData = useCallback((data: Partial<CreatePatientResponsibleData>) => { dispatch(updateResponsibleData(data)) }, [dispatch]);
	const handleUpdatePartnerData = useCallback((data: Partial<CreatePatientPartnerData>) => { dispatch(updatePartnerData(data)) }, [dispatch]);
	const handleUpdateSecondPatientData = useCallback((data: Partial<CreatePatientSecondPatientData>) => { dispatch(updateSecondPatientData(data)) }, [dispatch]);
	const handleResetCreatePatient = useCallback(() => { dispatch(resetCreatePatient()) }, [dispatch]);

	return {
		personalData,
		therapyData,
		responsibleData,
		partnerData,
		secondPatientData,
		shouldShowResponsibleData,
		shouldShowPartnerData,
		shouldShowSecondPatientData,
		handleUpdatePersonalData,
		handleUpdateTherapyData,
		handleUpdateResponsibleData,
		handleUpdatePartnerData,
		handleUpdateSecondPatientData,
		handleResetCreatePatient,
	};
};