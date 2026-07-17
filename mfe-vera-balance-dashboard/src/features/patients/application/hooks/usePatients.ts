import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

import {
	changePatientStatus,
	setSelectedPatient,
} from '../store/patients.slice';

import {
	selectPatients,
	selectPatientsError,
	selectPatientsLoading,
	selectSelectedPatient,
} from '../store/patients.selectors';

import type { PatientListItem } from '../../domain/interfaces/patient.interface';
import type { PatientStatus } from '../../../../common/catalogs/patient-status.catalog';

export const usePatients = () => {
	const dispatch = useAppDispatch();

	const patients = useAppSelector(selectPatients);
	const selectedPatient = useAppSelector(selectSelectedPatient);
	const isLoading = useAppSelector(selectPatientsLoading);
	const error = useAppSelector(selectPatientsError);

	const handleChangePatientStatus = useCallback(( patientId: string, status: PatientStatus) => { dispatch(changePatientStatus({ patientId, status })) }, [dispatch]);

	const handleSelectPatient = useCallback((patient: PatientListItem | null) => { dispatch(setSelectedPatient(patient)) }, [dispatch]);

	return {
		patients,
		selectedPatient,
		isLoading,
		error,
		handleChangePatientStatus,
		handleSelectPatient,
	};
};