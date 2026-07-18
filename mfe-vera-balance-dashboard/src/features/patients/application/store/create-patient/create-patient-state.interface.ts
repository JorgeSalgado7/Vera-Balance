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
	therapyType: string;
	reasonForConsultation: string;
}

export interface CreatePatientResponsibleData {
	name: string;
	age: string;
	relationship: string;
	phone: string;
}

export interface CreatePatientPartnerData {
	name: string;
	age: string;
	phone: string;
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
	responsibleData: CreatePatientResponsibleData;
	partnerData: CreatePatientPartnerData;
	secondPatientData: CreatePatientSecondPatientData;
}