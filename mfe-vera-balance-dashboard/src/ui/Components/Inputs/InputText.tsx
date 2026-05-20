import { Input } from 'antd';
import type { InputI } from '../interfaces/input.interface';

export const InputText = ({ label, placeholder }: InputI) => {
	return (
		<div className='vb_group_input'>

			{ label && <label>{label}</label> }

			<Input 
				placeholder={placeholder}
			/>
			
		</div>
	)
}
