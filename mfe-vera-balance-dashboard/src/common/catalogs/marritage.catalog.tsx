import type { CatalogItem } from '../interfaces/catalog-item.interface';

export const MARITAL_STATUS = {
	SINGLE: 'Soltero',
	IN_RELATIONSHIP: 'En una relación',
	MARRIED: 'Casado',
	DIVORCED: 'Divorciado',
	WIDOWED: 'Viudo',
} as const;

export type MaritalStatus = typeof MARITAL_STATUS[keyof typeof MARITAL_STATUS];

export const marritage: CatalogItem<MaritalStatus>[] = [
	{
		label: MARITAL_STATUS.SINGLE,
		value: MARITAL_STATUS.SINGLE,
	},
	{
		label: MARITAL_STATUS.IN_RELATIONSHIP,
		value: MARITAL_STATUS.IN_RELATIONSHIP,
	},
	{
		label: MARITAL_STATUS.MARRIED,
		value: MARITAL_STATUS.MARRIED,
	},
	{
		label: MARITAL_STATUS.DIVORCED,
		value: MARITAL_STATUS.DIVORCED,
	},
	{
		label: MARITAL_STATUS.WIDOWED,
		value: MARITAL_STATUS.WIDOWED,
	},
];