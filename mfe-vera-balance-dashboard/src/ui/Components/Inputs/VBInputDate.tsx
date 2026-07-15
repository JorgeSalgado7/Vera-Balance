import { DatePicker } from 'antd';
import type { InputI } from '../../Interfaces/Inputs/input.interface';

export const VBInputDate = ({ label, placeholder }: InputI) => {
	return (
		<div className='vb_group_input'>

			{ label && <label>{label}</label> }

			<DatePicker
				placeholder={placeholder}
			/>
			
		</div>
	)
}
