//* Styles
import '../scss/therapy-data.scss'

//* Components
import dayjs from 'dayjs'
import { VBInputSelect } from "../../../ui/Components/Inputs/VBInputSelect"
import { VBInputDate } from '../../../ui/Components/Inputs/VBInputDate'
import { VBInputArea } from '../../../ui/Components/Inputs/VBInputArea'
import { therapist } from '../../../common/catalogs/therapist.catalog'
import { therapyType } from '../../../common/catalogs/therapy-type.catalog'
import { conditionalCatalog } from '../../../common/catalogs/conditional.catalog'
import { useCreatePatient } from '../application/hooks/useCreatePatient'


export const TherapyData = () => {

	const { therapyData, handleUpdateTherapyData } = useCreatePatient()

	return (
		
		<section  className='therapy_data'>
		
			<div className="terapy_data__item">
				<VBInputSelect 
					label='Terapeuta'
					value={therapyData.therapist}
					placeholder='Selecciona un terapeuta'
					options={therapist}
					onChange={(value) => handleUpdateTherapyData({ therapist: value })}
				/>
			</div>
		
			<div className="terapy_data__item">
				<VBInputDate
					label='Fecha de inicio'
					value={therapyData.startDate ? dayjs(therapyData.startDate) : null}
					placeholder='Selecciona la fecha de inicio'
					onChange={(value) => handleUpdateTherapyData({ startDate: value ? value.format('YYYY-MM-DD') : '' })}
				/>
			</div>
		
			<div className="terapy_data__item">
				<VBInputSelect 
					label='Tipo de terapia'
					value={therapyData.therapyType}
					placeholder='Elije un tipo de terapia'
					options={therapyType}
					onChange={(value) => handleUpdateTherapyData({ therapyType: value })}
				/>
			</div>

			<div className="terapy_data__item terapy_data__item--empty">
				<VBInputSelect 
					label='¿Primera vez en terapia?'
					value={therapyData.firstTimeInTherapy}
					placeholder='Si / No'
					options={conditionalCatalog}
					onChange={(value) => handleUpdateTherapyData({ firstTimeInTherapy: value })}
				/>
			</div>

			<div className="terapy_data__item">
				<VBInputArea
					label='Motivo de consulta'
					value={therapyData.reasonForConsultation}
					placeholder='Ej: Problemas con el manejo de emociones'
					onChange={(value) => handleUpdateTherapyData({ reasonForConsultation: value })}
				/>
			</div>

			<div className="terapy_data__item">
				<VBInputArea
					label='Objetivos'
					value={therapyData.objectives}
					placeholder='Ej: Controlar mis emociones'
					onChange={(value) => handleUpdateTherapyData({ objectives: value })}
				/>
			</div>
	
		
		</section>

	)
}