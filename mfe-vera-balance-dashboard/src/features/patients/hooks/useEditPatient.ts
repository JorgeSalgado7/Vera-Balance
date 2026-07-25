import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectPatients } from '../application/store/patients.selectors';
import { setPatientForm } from '../application/store/patient-form/patient-form.slice';
import { updatePatient } from '../application/store/patients.slice';
import { patientFormInitialState } from '../application/store/patient-form/patient-form.initial-state';
import type { PatientFormState } from '../application/store/patient-form/patient-form-state.interface';
import type { TherapyType } from '../../../common/catalogs/therapy-type.catalog';
import { ROUTES } from '../../../common/constants/routes.constant';

export const useEditPatient = () => {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const patients = useAppSelector(selectPatients);

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleGetPatient = useCallback(async (patientId: string) => {
		setIsLoading(true);
		setError(null);

		try {
			const patient = patients.find((currentPatient) => currentPatient.id === patientId);

			if (!patient) {
				setError('No fue posible encontrar al paciente.');
				return;
			}

			dispatch(setPatientForm({
				...patientFormInitialState,
				personalData: { ...patientFormInitialState.personalData, name: patient.name },
				therapyData: { ...patientFormInitialState.therapyData, therapyType: patient.therapyTypes[0] ?? '' }
			}));
		} catch {
			setError('No fue posible obtener la información del paciente.');
		} finally {
			setIsLoading(false);
		}
	}, [dispatch, patients]);

	const handleEditPatient = useCallback(async (patientId: string, patientForm: PatientFormState) => {
		setIsLoading(true);
		setError(null);

		try {
			const patient = patients.find((currentPatient) => currentPatient.id === patientId);

			if (!patient) {
				setError('No fue posible encontrar al paciente.');
				return;
			}

			dispatch(updatePatient({
				...patient,
				name: patientForm.personalData.name,
				therapyTypes: patientForm.therapyData.therapyType ? [patientForm.therapyData.therapyType as TherapyType] : []
			}));

			navigate(ROUTES.PATIENTS.LIST);
		} catch {
			setError('No fue posible editar al paciente.');
		} finally {
			setIsLoading(false);
		}
	}, [dispatch, navigate, patients]);

	return {
		isLoading,
		error,
		handleGetPatient,
		handleEditPatient
	};
};