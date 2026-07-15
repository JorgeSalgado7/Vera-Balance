import {
	PATIENT_STATUS,
} from '../../../../common/catalogs/patient-status.catalog';
import {
	THERAPIST,
} from '../../../../common/catalogs/therapist.catalog';
import {
	THERAPY_TYPE,
} from '../../../../common/catalogs/therapy-type.catalog';

import type {
	PatientListItem,
} from '../../domain/interfaces/patient.interface';

export const patientsMock: PatientListItem[] = [
	{
		id: '1',
		name: 'Ana Sofía Martínez',
		therapists: [
			THERAPIST.MONICA_VERA,
		],
		therapyTypes: [
			THERAPY_TYPE.INDIVIDUAL,
		],
		lastSessionAt: '2026-07-08',
		status: PATIENT_STATUS.ACTIVE,
	},
	{
		id: '2',
		name: 'Carlos Hernández',
		therapists: [
			THERAPIST.MONICA_VERA,
			THERAPIST.ELISA_GALLARDO,
		],
		therapyTypes: [
			THERAPY_TYPE.INDIVIDUAL,
			THERAPY_TYPE.LANGUAGE,
		],
		lastSessionAt: '2026-07-03',
		status: PATIENT_STATUS.ACTIVE,
	},
	{
		id: '3',
		name: 'Mariana López',
		therapists: [
			THERAPIST.CONCEPCION_ENCISO,
		],
		therapyTypes: [
			THERAPY_TYPE.CHILD,
			THERAPY_TYPE.SENSORY,
		],
		lastSessionAt: '2026-06-18',
		status: PATIENT_STATUS.INACTIVE,
	},
	{
		id: '4',
		name: 'Diego Ramírez',
		therapists: [
			THERAPIST.MONICA_VERA,
			THERAPIST.ELISA_GALLARDO,
		],
		therapyTypes: [
			THERAPY_TYPE.COUPLE,
			THERAPY_TYPE.INDIVIDUAL,
		],
		lastSessionAt: null,
		status: PATIENT_STATUS.ACTIVE,
	},
	{
		id: '5',
		name: 'Fernanda Ruiz',
		therapists: [
			THERAPIST.MONICA_VERA,
		],
		therapyTypes: [
			THERAPY_TYPE.SPORTS,
		],
		lastSessionAt: '2026-05-22',
		status: PATIENT_STATUS.DISCHARGED,
	},
];