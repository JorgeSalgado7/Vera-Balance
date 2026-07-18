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
		address: '',
	},
	therapyData: {
		therapyType: '',
		reasonForConsultation: '',
	},
	responsibleData: {
		name: '',
		age: '',
		relationship: '',
		phone: '',
	},
	partnerData: {
		name: '',
		age: '',
		phone: '',
		relationshipTime: '',
	},
	secondPatientData: {
		name: '',
		age: '',
		phone: '',
		schoolGrade: '',
		occupation: '',
		maritalStatus: '',
		religion: '',
		address: '',
	},
};