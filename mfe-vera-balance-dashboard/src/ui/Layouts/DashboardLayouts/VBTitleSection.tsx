import type { TitleSectionI } from "../../Interfaces/Layouts/title-section.interface"

export const VBTitleSection = ({ step, title }: TitleSectionI) => {
	return (
		<div className="title_section">
			<div className='title_section--step'>{ step && step }</div>
			<h3 className='title_section--text'>{ title }</h3>
		</div>
	)
}
