export interface InputI {
	label?: string;
	placeholder?: string;
	value?: string;
	disabled?: boolean;
	error?: string;
	onChange?: (value: string) => void;
}
