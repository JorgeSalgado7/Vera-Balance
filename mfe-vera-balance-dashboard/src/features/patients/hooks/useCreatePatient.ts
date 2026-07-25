import { useCallback, useState } from 'react';

import type { PatientFormState } from '../application/store/patient-form/patient-form-state.interface';

export const useCreatePatient = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleCreatePatient = useCallback(async (patientForm: PatientFormState) => {
		setIsLoading(true);
		setError(null);

		try {
			console.log('Create patient payload', patientForm);
		} catch {
			setError('No fue posible crear el paciente.');
		} finally {
			setIsLoading(false);
		}
	}, []);

	return {
		isLoading,
		error,
		handleCreatePatient
	};
};