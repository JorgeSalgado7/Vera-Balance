export interface CatalogItem<TValue extends string = string> {
	label: string;
	value: TValue;
	icon?: string;
}