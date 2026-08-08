import { SearchOutlined } from '@ant-design/icons';

//* Components
import { VBInputText } from './Inputs/VBInputText';

//* Interfaces
import type { SearchInputI } from '../Interfaces/Components/search-input.interface';

export const VBSearchInput = ({
	value,
	placeholder = 'Buscar...',
	disabled,
	onChange
}: SearchInputI) => {
	return (
		<div className="vb_search_input">

			<VBInputText
				value={value}
				disabled={disabled}
				placeholder={placeholder}
				prefix={ <SearchOutlined /> }
				allowClear
				onChange={onChange}
			/>

		</div>
	)
}