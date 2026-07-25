//* Components
import { VBInputSelect } from '../../../../../ui/Components/Inputs/VBInputSelect'
import { therapyType } from '../../../../../common/catalogs/therapy-type.catalog'

//* Interfaces
import type { PatientTherapyData } from '../../../application/store/patient-form/patient-form-state.interface'


interface TherapyTypeDataProps {
	therapyData: PatientTherapyData;
	onChange: (data: Partial<PatientTherapyData>) => void;
}

export const TherapyTypeData = ({ therapyData, onChange }: TherapyTypeDataProps) => {

	return (
		
		<section className='therapy_type_data'>
		
			<div className="therapy_type_data__item">
				<VBInputSelect 
					label='Tipo de terapia'
					value={therapyData.therapyType}
					placeholder='Elije un tipo de terapia'
					options={therapyType}
					onChange={(value) => onChange({ therapyType: value })}
				/>
			</div>
		
		</section>

	)
}