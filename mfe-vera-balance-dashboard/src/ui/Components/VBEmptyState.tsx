import { Empty } from 'antd';

//* Interfaces
import type { EmptyStateI } from '../Interfaces/Components/empty-state.interface';

export const VBEmptyState = ({ description, children }: EmptyStateI) => {
	return (
		<Empty
			image={ Empty.PRESENTED_IMAGE_SIMPLE }
			description={description}
			className="vb_empty_state"
		>
			{ children }
		</Empty>
	)
}