import type { CatalogItem } from '../interfaces/catalog-item.interface';

export const THERAPY_TYPE = {
	INDIVIDUAL: 'Terapia individual',
	CHILD: 'Terapia infantil',
	COUPLE: 'Terapia de pareja',
	FAMILY: 'Terapia familiar',
	SPORTS: 'Psicología deportiva',
	LANGUAGE: 'Terapia de lenguaje',
	SENSORY: 'Terapia sensorial',
} as const;

export type TherapyType =
	typeof THERAPY_TYPE[keyof typeof THERAPY_TYPE];

export const therapyType: CatalogItem<TherapyType>[] = [
	{
		label: THERAPY_TYPE.INDIVIDUAL,
		value: THERAPY_TYPE.INDIVIDUAL,
		icon: 'bi bi-person',
	},
	{
		label: THERAPY_TYPE.CHILD,
		value: THERAPY_TYPE.CHILD,
		icon: 'bi bi-balloon-heart',
	},
	{
		label: THERAPY_TYPE.COUPLE,
		value: THERAPY_TYPE.COUPLE,
		icon: 'bi bi-people',
	},
	{
		label: THERAPY_TYPE.FAMILY,
		value: THERAPY_TYPE.FAMILY,
		icon: 'bi bi-house-heart',
	},
	{
		label: THERAPY_TYPE.SPORTS,
		value: THERAPY_TYPE.SPORTS,
		icon: 'bi bi-trophy',
	},
	{
		label: THERAPY_TYPE.LANGUAGE,
		value: THERAPY_TYPE.LANGUAGE,
		icon: 'bi bi-chat-left-text',
	},
	{
		label: THERAPY_TYPE.SENSORY,
		value: THERAPY_TYPE.SENSORY,
		icon: 'bi bi-stars',
	},
];