import { Select } from 'antd';
import type { InputI } from '../../Interfaces/Inputs/input.interface';

export const InputSelect = ({ label, placeholder }: InputI) => {
	
	const handleChange = () => {}
	
	return (
		<div className='vb_group_select'>

			{ label && <label>{label}</label> }

			<Select
				defaultValue={placeholder}
				onChange={handleChange}
				options={[
					{ value: 'jack', label: 'Jack' },
				]}
				getPopupContainer={(trigger) => trigger.parentElement!}
			/>
			
		</div>
	)
}
