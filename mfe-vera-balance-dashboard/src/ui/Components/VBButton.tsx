import type { ButtonI } from '../Interfaces/Components/button.interface';

export const VBButton = ({
	children,
	color = 'pink',
	variant = 'solid',
	size = 'md',
	icon,
	iconPosition = 'left',
	htmlType = 'button',
	loading = false,
	disabled = false,
	fullWidth = false,
	className = '',
	onClick
}: ButtonI) => {

	const classes = [
		'vb_btn',
		variant === 'solid'
			? `vb_btn--${color}`
			: `vb_btn_outline--${color}`,
		size !== 'md'
			? `vb_btn-${size}`
			: '',
		fullWidth
			? 'vb_btn--full'
			: '',
		className
	].filter(Boolean).join(' ')

	return (

		<button
			type={htmlType}
			className={classes}
			disabled={disabled || loading}
			onClick={onClick}
		>

			{
				loading &&
				<span className='vb_btn__loading'></span>
			}

			{
				!loading && icon && iconPosition === 'left' &&
				<i className={`bi bi-${icon}`}></i>
			}

			{children}

			{
				!loading && icon && iconPosition === 'right' &&
				<i className={`bi bi-${icon}`}></i>
			}

		</button>

	)

}