import { Input } from 'antd';
import type { InputI } from '../../Interfaces/Inputs/input.interface';

export const VBInputArea = ({ label, placeholder, value, disabled, error, onChange }: InputI) => {

	const { TextArea } = Input

	return (
		<div className='vb_group_input'>

			{ label && <label>{label}</label> }

			<TextArea
				value={value}
				disabled={disabled}
				placeholder={placeholder}
				status={error ? 'error' : undefined}
				onChange={ (event) => onChange?.(event.target.value) }
			/>

			{ error && <span className="vb_group_input__error">{error}</span> }
			
		</div>
	)
}