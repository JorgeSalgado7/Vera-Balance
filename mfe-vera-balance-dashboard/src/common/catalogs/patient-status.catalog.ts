import type { CatalogItem } from '../interfaces/catalog-item.interface';

export const PATIENT_STATUS = {
	ACTIVE: 'Activo',
	INACTIVE: 'Inactivo',
	DISCHARGED: 'Dado de alta',
} as const;

export type PatientStatus =
	typeof PATIENT_STATUS[keyof typeof PATIENT_STATUS];

export interface PatientStatusCatalogItem
	extends CatalogItem<PatientStatus> {
	color: 'success' | 'warning' | 'default';
}

export const patientStatus: PatientStatusCatalogItem[] = [
	{
		label: PATIENT_STATUS.ACTIVE,
		value: PATIENT_STATUS.ACTIVE,
		color: 'success',
	},
	{
		label: PATIENT_STATUS.INACTIVE,
		value: PATIENT_STATUS.INACTIVE,
		color: 'warning',
	},
	{
		label: PATIENT_STATUS.DISCHARGED,
		value: PATIENT_STATUS.DISCHARGED,
		color: 'default',
	},
];