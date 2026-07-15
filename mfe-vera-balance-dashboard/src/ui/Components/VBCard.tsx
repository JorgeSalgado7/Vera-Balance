import type { CarddI } from '../Interfaces/Components/card.interface'

export const VBCard = ({ children, customClass }: CarddI) => {
	return (
		<div className={`vb_card ${customClass}`}>
			{children}
		</div>
	)
}
