import type { CatalogItem } from '../interfaces/catalog-item.interface';

export const CONDITIONAL_VALUE = {
	YES: 'Si',
	NO: 'No',
} as const;

export type ConditionalValue = typeof CONDITIONAL_VALUE[keyof typeof CONDITIONAL_VALUE];

export const conditionalCatalog: CatalogItem<ConditionalValue>[] = [
	{
		label: 'Sí',
		value: CONDITIONAL_VALUE.YES,
	},
	{
		label: 'No',
		value: CONDITIONAL_VALUE.NO,
	},
];