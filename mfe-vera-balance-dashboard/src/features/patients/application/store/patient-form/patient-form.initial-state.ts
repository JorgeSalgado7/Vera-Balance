import type { PatientFormState } from './patient-form-state.interface';

export const patientFormInitialState: PatientFormState = {
	personalData: {
		name: '',
		age: '',
		phone: '',
		schoolGrade: '',
		occupation: '',
		maritalStatus: '',
		religion: '',
		address: ''
	},
	therapyData: {
		therapist: '',
		startDate: '',
		therapyType: '',
		firstTimeInTherapy: '',
		reasonForConsultation: '',
		objectives: ''
	},
	guardianData: {
		name: '',
		age: '',
		relationship: '',
		phone: ''
	},
	partnerData: {
		name: '',
		age: '',
		relationshipTime: ''
	},
	secondPatientData: {
		name: '',
		age: '',
		phone: '',
		schoolGrade: '',
		occupation: '',
		maritalStatus: '',
		religion: '',
		address: ''
	}
};