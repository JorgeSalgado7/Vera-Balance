import { Input } from 'antd';
import type { InputI } from '../../Interfaces/Inputs/input.interface';

export const VBInputText = ({ label, placeholder }: InputI) => {
	return (
		<div className='vb_group_input'>

			{ label && <label>{label}</label> }

			<Input 
				placeholder={placeholder}
			/>
			
		</div>
	)
}
