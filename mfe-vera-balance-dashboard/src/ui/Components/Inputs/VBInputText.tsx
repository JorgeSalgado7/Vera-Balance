import { Input } from 'antd';

//* Interfaces
import type { InputI } from '../../Interfaces/Inputs/input.interface';

export const VBInputText = ({
	label,
	placeholder,
	value,
	disabled,
	error,
	prefix,
	allowClear,
	customClass = '',
	onChange
}: InputI) => {
	return (
		<div className={`vb_group_input ${customClass}`}>

			{ label && <label>{label}</label> }

			<Input
				value={value}
				disabled={disabled}
				placeholder={placeholder}
				prefix={prefix}
				allowClear={allowClear}
				status={error ? 'error' : undefined}
				onChange={ (event) => onChange?.(event.target.value) }
			/>

			{ error && <span className="vb_group_input__error"> {error} </span> }
			
		</div>
	)
}