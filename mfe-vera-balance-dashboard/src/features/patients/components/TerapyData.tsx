//* Styles
import '../scss/terapy-data.scss'

//* Components
import { InputSelect } from "../../../ui/Components/Inputs/InputSelect"
import { InputDate } from '../../../ui/Components/Inputs/InputDate'
import { InputArea } from '../../../ui/Components/Inputs/InputArea'
import { therapist } from '../../../common/catalogs/therapist.catalog'
import { therapyType } from '../../../common/catalogs/therapy-type.catalog'


export const TerapyData = () => {
	return (
		
		<section  className='terapy_data'>
		
			<div className="terapy_data__item">
				<InputSelect 
					label='Terapeuta'
					placeholder='Selecciona un terapeuta'
					options={therapist}
				/>
			</div>
		
			<div className="terapy_data__item">
				<InputDate
					label='Fecha de inicio'
					placeholder='Selecciona la fecha de inicio'
				/>
			</div>
		
			<div className="terapy_data__item">
				<InputSelect 
					label='Tipo de terapia'
					placeholder='Elije un tipo de terapia'
					options={therapyType}
				/>
			</div>

			<div className="terapy_data__item terapy_data__item--empty"></div>

			<div className="terapy_data__item">
				<InputArea
					label='Motivo de consulta'
					placeholder='Ej: Problemas con el manejo de emociones'
				/>
			</div>

			<div className="terapy_data__item">
				<InputArea
					label='Objetivos'
					placeholder='Ej: Controlar mis emociones'
				/>
			</div>
	
		
		</section>

	)
}
