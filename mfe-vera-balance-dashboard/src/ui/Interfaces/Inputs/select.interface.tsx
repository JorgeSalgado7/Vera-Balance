interface OptionI {
	label: string
	value: string
}

export interface SelectI {
	label?: string
	placeholder: string
	options: OptionI[]
}