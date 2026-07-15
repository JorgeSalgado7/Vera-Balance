import type { CatalogItem } from '../../../common/interfaces/catalog-item.interface';

export interface SelectI {
	label?: string;
	placeholder?: string;
	options: CatalogItem[];
	value?: string;
	disabled?: boolean;
	error?: string;
	onChange?: (value: string) => void;
}