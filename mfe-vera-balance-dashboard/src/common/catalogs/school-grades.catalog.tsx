import type { CatalogItem } from '../interfaces/catalog-item.interface';

export const SCHOOL_GRADE = {
	NONE: 'Sin escolaridad',
	KINDERGARTEN: 'Kinder',
	ELEMENTARY: 'Primaria',
	MIDDLE_SCHOOL: 'Secundaria',
	HIGH_SCHOOL: 'Preparatoria',
	UNIVERSITY: 'Universidad',
	MASTERS: 'Maestría',
	DOCTORATE: 'Doctorado',
} as const;

export type SchoolGrade = typeof SCHOOL_GRADE[keyof typeof SCHOOL_GRADE];

export const schoolGrades: CatalogItem<SchoolGrade>[] = [
	{
		label: SCHOOL_GRADE.NONE,
		value: SCHOOL_GRADE.NONE,
	},
	{
		label: SCHOOL_GRADE.KINDERGARTEN,
		value: SCHOOL_GRADE.KINDERGARTEN,
	},
	{
		label: SCHOOL_GRADE.ELEMENTARY,
		value: SCHOOL_GRADE.ELEMENTARY,
	},
	{
		label: SCHOOL_GRADE.MIDDLE_SCHOOL,
		value: SCHOOL_GRADE.MIDDLE_SCHOOL,
	},
	{
		label: SCHOOL_GRADE.HIGH_SCHOOL,
		value: SCHOOL_GRADE.HIGH_SCHOOL,
	},
	{
		label: SCHOOL_GRADE.UNIVERSITY,
		value: SCHOOL_GRADE.UNIVERSITY,
	},
	{
		label: SCHOOL_GRADE.MASTERS,
		value: SCHOOL_GRADE.MASTERS,
	},
	{
		label: SCHOOL_GRADE.DOCTORATE,
		value: SCHOOL_GRADE.DOCTORATE,
	},
];