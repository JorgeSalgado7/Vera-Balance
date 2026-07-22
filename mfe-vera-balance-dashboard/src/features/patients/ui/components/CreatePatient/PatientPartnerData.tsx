//* Components
import { VBInputText } from '../../../../../ui/Components/Inputs/VBInputText'
import { useCreatePatient } from '../../../hooks/useCreatePatient'


export const PatientPartnerData = () => {

	const { partnerData, handleUpdatePartnerData } = useCreatePatient()

	return (
		
		<section className='patient_partner_data'>
		
			<div className="patient_partner_data__item">
				<VBInputText 
					label='Nombre de la pareja'
					value={partnerData.name}
					placeholder='Ej: Andrea Hernández'
					onChange={(value) => handleUpdatePartnerData({ name: value })}
				/>
			</div>
		
			<div className="patient_partner_data__item patient_partner_data__item--half">
				<VBInputText 
					label='Edad'
					value={partnerData.age}
					placeholder='Ej: 30'
					onChange={(value) => handleUpdatePartnerData({ age: value })}
				/>
			</div>
		
			<div className="patient_partner_data__item">
				<VBInputText 
					label='Tiempo de relación'
					value={partnerData.relationshipTime}
					placeholder='Ej: 5 años'
					onChange={(value) => handleUpdatePartnerData({ relationshipTime: value })}
				/>
			</div>
		
		</section>

	)
}