import type { HeaderI } from "../../Interfaces/Layouts/header.interface"

export const HeaderLayout = ({ title, therapist }: HeaderI) => {
	return (
		<header className='header_layout'>

			<button className="header_layout__toggle">
				<div className="header_layout__toggle__bar"></div>
			</button>

			<div className="header_layout__info">
				<h2 className='header_layout__section'>{title}</h2>
				<p>Hola {therapist}! Aquí encontrarás todo sobre tus pacientes</p>
			</div>
			
			
			<div className='header_layout__avatar'>{therapist}</div>

		</header>
	)
}
