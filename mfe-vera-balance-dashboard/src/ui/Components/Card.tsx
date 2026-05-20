import type { CarddI } from '../Layouts/Interfaces/Components/card.interface'

export const Card = ({ children, customClass }: CarddI) => {
	return (
		<div className={`vb_card ${customClass}`}>
			{children}
		</div>
	)
}
