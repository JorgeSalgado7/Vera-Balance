import { Select } from 'antd';
import type { SelectI } from '../../Interfaces/Inputs/select.interface';

export const InputSelect = ({ label, placeholder, options }: SelectI) => {
	
	const handleChange = () => {}
	
	return (
		<div className='vb_group_select'>

			{ label && <label>{label}</label> }

			<Select
				defaultValue={placeholder}
				onChange={handleChange}
				options={options}
				getPopupContainer={(trigger) => trigger.parentElement!}
			/>
			
		</div>
	)
}
