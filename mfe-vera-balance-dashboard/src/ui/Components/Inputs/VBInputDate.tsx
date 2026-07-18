import { DatePicker } from 'antd';
import type { InputDateI } from '../../Interfaces/Inputs/input-date.interface';

export const VBInputDate = ({ label, placeholder, value, disabled, error, onChange }: InputDateI) => {
	return (
		<div className='vb_group_input'>

			{ label && <label>{label}</label> }

			<DatePicker
				value={value}
				disabled={disabled}
				placeholder={placeholder}
				status={error ? 'error' : undefined}
				onChange={onChange}
			/>

			{ error && <span className="vb_group_input__error">{error}</span> }
			
		</div>
	)
}