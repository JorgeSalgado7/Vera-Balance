//* Components
import dayjs from 'dayjs'
import { VBInputSelect } from '../../../../../ui/Components/Inputs/VBInputSelect'
import { VBInputDate } from '../../../../../ui/Components/Inputs/VBInputDate'
import { VBInputArea } from '../../../../../ui/Components/Inputs/VBInputArea'
import { therapist } from '../../../../../common/catalogs/therapist.catalog'
import { conditionalCatalog } from '../../../../../common/catalogs/conditional.catalog'

//* Interfaces
import type { PatientTherapyData as PatientTherapyDataI } from '../../../application/store/patient-form/patient-form-state.interface'


interface TherapyDataProps {
	therapyData: PatientTherapyDataI;
	onChange: (data: Partial<PatientTherapyDataI>) => void;
}

export const TherapyData = ({ therapyData, onChange }: TherapyDataProps) => {

	return (
		
		<section className='therapy_data'>
		
			<div className="therapy_data__item">
				<VBInputSelect 
					label='Terapeuta'
					value={therapyData.therapist}
					placeholder='Selecciona un terapeuta'
					options={therapist}
					onChange={(value) => onChange({ therapist: value })}
				/>
			</div>
		
			<div className="therapy_data__item">
				<VBInputDate
					label='Fecha de inicio'
					value={therapyData.startDate ? dayjs(therapyData.startDate) : null}
					placeholder='Selecciona la fecha de inicio'
					onChange={(value) => onChange({ startDate: value ? value.format('YYYY-MM-DD') : '' })}
				/>
			</div>

			<div className="therapy_data__item">
				<VBInputSelect 
					label='¿Primera vez en terapia?'
					value={therapyData.firstTimeInTherapy}
					placeholder='Si / No'
					options={conditionalCatalog}
					onChange={(value) => onChange({ firstTimeInTherapy: value })}
				/>
			</div>

			<div className="therapy_data__item therapy_data__item--empty"></div>

			<div className="therapy_data__item">
				<VBInputArea
					label='Motivo de consulta'
					value={therapyData.reasonForConsultation}
					placeholder='Ej: Problemas con el manejo de emociones'
					onChange={(value) => onChange({ reasonForConsultation: value })}
				/>
			</div>

			<div className="therapy_data__item">
				<VBInputArea
					label='Objetivos'
					value={therapyData.objectives}
					placeholder='Ej: Controlar mis emociones'
					onChange={(value) => onChange({ objectives: value })}
				/>
			</div>
		
		</section>

	)
}