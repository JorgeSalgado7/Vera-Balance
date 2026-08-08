import type { ReactNode } from 'react';

export interface InputI {
	label?: string;
	placeholder?: string;
	value?: string;
	disabled?: boolean;
	error?: string;
	prefix?: ReactNode;
	allowClear?: boolean;
	customClass?: string;
	onChange?: (value: string) => void;
}