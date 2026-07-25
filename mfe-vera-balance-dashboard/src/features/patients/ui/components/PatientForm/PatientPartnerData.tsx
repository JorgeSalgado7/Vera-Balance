//* Components
import { VBInputText } from '../../../../../ui/Components/Inputs/VBInputText'

//* Interfaces
import type { PatientPartnerData as PatientPartnerDataI } from '../../../application/store/patient-form/patient-form-state.interface'


interface PatientPartnerDataProps {
	partnerData: PatientPartnerDataI;
	onChange: (data: Partial<PatientPartnerDataI>) => void;
}

export const PatientPartnerData = ({ partnerData, onChange }: PatientPartnerDataProps) => {

	return (
		
		<section className='patient_partner_data'>
		
			<div className="patient_partner_data__item">
				<VBInputText 
					label='Nombre de la pareja'
					value={partnerData.name}
					placeholder='Ej: Andrea Hernández'
					onChange={(value) => onChange({ name: value })}
				/>
			</div>
		
			<div className="patient_partner_data__item patient_partner_data__item--half">
				<VBInputText 
					label='Edad'
					value={partnerData.age}
					placeholder='Ej: 30'
					onChange={(value) => onChange({ age: value })}
				/>
			</div>
		
			<div className="patient_partner_data__item">
				<VBInputText 
					label='Tiempo de relación'
					value={partnerData.relationshipTime}
					placeholder='Ej: 5 años'
					onChange={(value) => onChange({ relationshipTime: value })}
				/>
			</div>
		
		</section>

	)
}