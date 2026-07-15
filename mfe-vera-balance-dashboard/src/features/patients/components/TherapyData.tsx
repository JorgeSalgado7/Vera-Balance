//* Styles
import '../scss/therapy-data.scss'

//* Components
import { VBInputSelect } from "../../../ui/Components/Inputs/VBInputSelect"
import { VBInputDate } from '../../../ui/Components/Inputs/VBInputDate'
import { VBInputArea } from '../../../ui/Components/Inputs/VBInputArea'
import { therapist } from '../../../common/catalogs/therapist.catalog'
import { therapyType } from '../../../common/catalogs/therapy-type.catalog'
import { conditionalCatalog } from '../../../common/catalogs/conditional.catalog'


export const TherapyData = () => {
	return (
		
		<section  className='therapy_data'>
		
			<div className="terapy_data__item">
				<VBInputSelect 
					label='Terapeuta'
					placeholder='Selecciona un terapeuta'
					options={therapist}
				/>
			</div>
		
			<div className="terapy_data__item">
				<VBInputDate
					label='Fecha de inicio'
					placeholder='Selecciona la fecha de inicio'
				/>
			</div>
		
			<div className="terapy_data__item">
				<VBInputSelect 
					label='Tipo de terapia'
					placeholder='Elije un tipo de terapia'
					options={therapyType}
				/>
			</div>

			<div className="terapy_data__item terapy_data__item--empty">
				<VBInputSelect 
					label='¿Primera vez en terapia?'
					placeholder='Si / No'
					options={conditionalCatalog}
				/>
			</div>

			<div className="terapy_data__item">
				<VBInputArea
					label='Motivo de consulta'
					placeholder='Ej: Problemas con el manejo de emociones'
				/>
			</div>

			<div className="terapy_data__item">
				<VBInputArea
					label='Objetivos'
					placeholder='Ej: Controlar mis emociones'
				/>
			</div>
	
		
		</section>

	)
}
