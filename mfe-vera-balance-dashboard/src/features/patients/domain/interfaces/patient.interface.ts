import type { PatientStatus } from '../../../../common/catalogs/patient-status.catalog';
import type { Therapist } from '../../../../common/catalogs/therapist.catalog';
import type { TherapyType } from '../../../../common/catalogs/therapy-type.catalog';

export interface PatientListItem {
	id: string;
	name: string;
	therapists: Therapist[];
	therapyTypes: TherapyType[];
	lastSessionAt: string | null;
	status: PatientStatus;
}