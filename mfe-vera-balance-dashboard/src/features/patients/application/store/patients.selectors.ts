import type { RootState } from '../../../../store/store';

export const selectPatients = (state: RootState) => state.patients.patients;
export const selectSelectedPatient = (state: RootState) => state.patients.selectedPatient;
export const selectPatientsLoading = (state: RootState) => state.patients.isLoading;
export const selectPatientsError = (state: RootState) =>state.patients.error;