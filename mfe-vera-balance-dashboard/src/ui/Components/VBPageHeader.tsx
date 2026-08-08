//* Interfaces
import type { PageHeaderI } from '../Interfaces/Components/page-header.interface';

export const VBPageHeader = ({ title, description, children }: PageHeaderI) => {
	return (
		<div className="vb_page_header">

			<div className="vb_page_header__info">
				<h2>{ title }</h2>
				{ description && <p>{ description }</p> }
			</div>

			{ children &&
				<div className="vb_page_header__actions">
					{ children }
				</div>
			}

		</div>
	)
}