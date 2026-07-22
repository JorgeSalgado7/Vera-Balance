import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import { changePatientStatus } from '../application/store/patients.slice';

import {
	selectPatients,
	selectPatientsLoading
} from '../application/store/patients.selectors';

import type { PatientStatus } from '../../../common/catalogs/patient-status.catalog';

export const usePatients = () => {

	const dispatch = useAppDispatch();

	const patients = useAppSelector(selectPatients);
	const isLoading = useAppSelector(selectPatientsLoading);

	const handleChangePatientStatus = useCallback((patientId: string, status: PatientStatus) => { dispatch(changePatientStatus({ patientId, status })) }, [dispatch]);

	return {
		patients,
		isLoading,
		handleChangePatientStatus
	};
};