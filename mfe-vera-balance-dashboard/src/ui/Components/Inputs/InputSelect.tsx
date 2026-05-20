import { Select } from 'antd';
import type { InputI } from '../interfaces/input.interface';

export const InputSelect = ({ label, placeholder }: InputI) => {
	return (
		<div className='vb_group_input'>

			{ label && <label>{label}</label> }

			<Select
				//defaultValue={placeholder}
				//onChange={handleChange}
				options={[
					{ value: 'jack', label: 'Jack' },
				]}
				getPopupContainer={(trigger) => trigger.parentElement!}
			/>
			
		</div>
	)
}
