import type { ReactNode } from 'react';

export interface ConfirmModalI {
	isOpen: boolean
	title: string
	description?: string
	icon?: string
	iconColor?: 'pink' | 'red'
	confirmText?: string
	cancelText?: string
	confirmButtonType?: 'pink' | 'red'
	isLoading?: boolean
	children?: ReactNode
	onConfirm: () => void
	onCancel: () => void
}