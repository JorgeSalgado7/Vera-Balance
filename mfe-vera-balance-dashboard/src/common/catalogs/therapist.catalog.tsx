import type { CatalogItem } from '../interfaces/catalog-item.interface';

export const THERAPIST = {
	MONICA_VERA: 'Monica Vera',
	ELISA_GALLARDO: 'Elisa Gallardo',
	CONCEPCION_ENCISO: 'Concepción Enciso',
} as const;

export type Therapist = typeof THERAPIST[keyof typeof THERAPIST];

export const therapist: CatalogItem<Therapist>[] = [
	{
		label: THERAPIST.MONICA_VERA,
		value: THERAPIST.MONICA_VERA,
	},
	{
		label: THERAPIST.ELISA_GALLARDO,
		value: THERAPIST.ELISA_GALLARDO,
	},
	{
		label: THERAPIST.CONCEPCION_ENCISO,
		value: THERAPIST.CONCEPCION_ENCISO,
	},
];