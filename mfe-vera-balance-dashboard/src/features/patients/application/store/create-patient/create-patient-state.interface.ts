export interface CreatePatientPersonalData {
	name: string;
	age: string;
	phone: string;
	schoolGrade: string;
	occupation: string;
	maritalStatus: string;
	religion: string;
	address: string;
}

export interface CreatePatientTherapyData {
	therapist: string;
	startDate: string;
	therapyType: string;
	firstTimeInTherapy: string;
	reasonForConsultation: string;
	objectives: string;
}

export interface CreatePatientGuardianData {
	name: string;
	age: string;
	relationship: string;
	phone: string;
}

export interface CreatePatientPartnerData {
	name: string;
	age: string;
	relationshipTime: string;
}

export interface CreatePatientSecondPatientData {
	name: string;
	age: string;
	phone: string;
	schoolGrade: string;
	occupation: string;
	maritalStatus: string;
	religion: string;
	address: string;
}

export interface CreatePatientState {
	personalData: CreatePatientPersonalData;
	therapyData: CreatePatientTherapyData;
	guardianData: CreatePatientGuardianData;
	partnerData: CreatePatientPartnerData;
	secondPatientData: CreatePatientSecondPatientData;
}