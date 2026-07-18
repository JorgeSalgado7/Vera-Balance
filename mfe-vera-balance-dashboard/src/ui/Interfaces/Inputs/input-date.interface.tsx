import type { Dayjs } from 'dayjs';

export interface InputDateI {
	label?: string;
	placeholder?: string;
	value?: Dayjs | null;
	disabled?: boolean;
	error?: string;
	onChange?: (value: Dayjs | null) => void;
}