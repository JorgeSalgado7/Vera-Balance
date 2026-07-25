export interface PatientPersonalData {
	name: string;
	age: string;
	phone: string;
	schoolGrade: string;
	occupation: string;
	maritalStatus: string;
	religion: string;
	address: string;
}

export interface PatientTherapyData {
	therapist: string;
	startDate: string;
	therapyType: string;
	firstTimeInTherapy: string;
	reasonForConsultation: string;
	objectives: string;
}

export interface PatientGuardianData {
	name: string;
	age: string;
	relationship: string;
	phone: string;
}

export interface PatientPartnerData {
	name: string;
	age: string;
	relationshipTime: string;
}

export interface SecondPatientData {
	name: string;
	age: string;
	phone: string;
	schoolGrade: string;
	occupation: string;
	maritalStatus: string;
	religion: string;
	address: string;
}

export interface PatientFormState {
	personalData: PatientPersonalData;
	therapyData: PatientTherapyData;
	guardianData: PatientGuardianData;
	partnerData: PatientPartnerData;
	secondPatientData: SecondPatientData;
}