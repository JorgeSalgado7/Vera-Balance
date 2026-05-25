import { Input } from 'antd';
import type { InputI } from '../../Interfaces/Inputs/input.interface';

export const InputArea = ({ label, placeholder }: InputI) => {

	const { TextArea } = Input

	return (
		<div className='vb_group_input'>

			{ label && <label>{label}</label> }

			<TextArea
				placeholder={placeholder}
			/>
			
		</div>
	)
}
