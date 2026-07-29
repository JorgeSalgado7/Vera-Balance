export interface ButtonI {
	children: React.ReactNode
	color?: 'pink' | 'soft_pink' | 'green' | 'soft_green' | 'red' | 'white'
	variant?: 'solid' | 'outline'
	size?: 'sm' | 'md' | 'lg'
	icon?: string
	iconPosition?: 'left' | 'right'
	htmlType?: 'button' | 'submit' | 'reset'
	loading?: boolean
	disabled?: boolean
	fullWidth?: boolean
	className?: string
	onClick?: () => void
}