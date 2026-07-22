import type { CreatePatientState } from './create-patient-state.interface';

export const createPatientInitialState: CreatePatientState = {
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