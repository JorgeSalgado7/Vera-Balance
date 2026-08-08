//* Interfaces
import type { PageToolsI } from '../Interfaces/Components/page-tools.interface';

export const VBPageTools = ({ children }: PageToolsI) => {
	return (
		<div className="vb_page_tools">
			{ children }
		</div>
	)
}