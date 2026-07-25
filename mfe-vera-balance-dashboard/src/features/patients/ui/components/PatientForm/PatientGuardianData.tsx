//* Components
import { VBInputText } from '../../../../../ui/Components/Inputs/VBInputText'
import { VBInputSelect } from '../../../../../ui/Components/Inputs/VBInputSelect'
import { relationship } from '../../../../../common/catalogs/relationship.catalog'

//* Interfaces
import type { PatientGuardianData as PatientGuardianDataI } from '../../../application/store/patient-form/patient-form-state.interface'


interface PatientGuardianDataProps {
	guardianData: PatientGuardianDataI;
	onChange: (data: Partial<PatientGuardianDataI>) => void;
}

export const PatientGuardianData = ({ guardianData, onChange }: PatientGuardianDataProps) => {

	return (
		
		<section className='patient_guardian_data'>
		
			<div className="patient_guardian_data__item">
				<VBInputText 
					label='Nombre del tutor o responsable'
					value={guardianData.name}
					placeholder='Ej: María López'
					onChange={(value) => onChange({ name: value })}
				/>
			</div>
		
			<div className="patient_guardian_data__item patient_guardian_data__item--half">
				<VBInputText 
					label='Edad'
					value={guardianData.age}
					placeholder='Ej: 40'
					onChange={(value) => onChange({ age: value })}
				/>
			</div>
		
			<div className="patient_guardian_data__item patient_guardian_data__item--half">
				<VBInputText 
					label='Teléfono'
					value={guardianData.phone}
					placeholder='Ej: 55 5555 5555'
					onChange={(value) => onChange({ phone: value })}
				/>
			</div>
		
			<div className="patient_guardian_data__item">
				<VBInputSelect 
					label='Parentesco'
					value={guardianData.relationship}
					placeholder='Selecciona el parentesco'
					options={relationship}
					onChange={(value) => onChange({ relationship: value })}
				/>
			</div>
		
		</section>

	)
}