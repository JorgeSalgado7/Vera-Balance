//* Components
import { VBInputSelect } from '../../../../ui/Components/Inputs/VBInputSelect'
import { therapyType } from '../../../../common/catalogs/therapy-type.catalog'
import { useCreatePatient } from '../../hooks/useCreatePatient'


export const TherapyTypeData = () => {

	const { therapyData, handleUpdateTherapyData } = useCreatePatient()

	return (
		
		<section className='therapy_type_data'>
		
			<div className="therapy_type_data__item">
				<VBInputSelect 
					label='Tipo de terapia'
					value={therapyData.therapyType}
					placeholder='Elije un tipo de terapia'
					options={therapyType}
					onChange={(value) => handleUpdateTherapyData({ therapyType: value })}
				/>
			</div>
		
		</section>

	)
}