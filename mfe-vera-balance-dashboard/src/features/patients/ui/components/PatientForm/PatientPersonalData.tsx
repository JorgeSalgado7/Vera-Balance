//* Components
import { VBInputText } from '../../../../../ui/Components/Inputs/VBInputText'
import { VBInputSelect } from '../../../../../ui/Components/Inputs/VBInputSelect'
import { schoolGrades } from '../../../../../common/catalogs/school-grades.catalog'
import { marritage } from '../../../../../common/catalogs/marritage.catalog'

//* Interfaces
import type { PatientPersonalData as PatientPersonalDataI } from '../../../application/store/patient-form/patient-form-state.interface'


interface PatientPersonalDataProps {
	personalData: PatientPersonalDataI;
	onChange: (data: Partial<PatientPersonalDataI>) => void;
}

export const PatientPersonalData = ({ personalData, onChange }: PatientPersonalDataProps) => {

	return (
		
		<section className='patient_personal_data'>
		
			<div className="patient_personal_data__item">
				<VBInputText 
					label='Nombre'
					value={personalData.name}
					placeholder='Ej: Monica Vera'
					onChange={(value) => onChange({ name: value })}
				/>
			</div>
		
			<div className="patient_personal_data__item patient_personal_data__item--half">
				<VBInputText 
					label='Edad'
					value={personalData.age}
					placeholder='Ej: 18'
					onChange={(value) => onChange({ age: value })}
				/>
			</div>
		
			<div className="patient_personal_data__item patient_personal_data__item--half">
				<VBInputText 
					label='Teléfono'
					value={personalData.phone}
					placeholder='Ej: 55 5555 5555'
					onChange={(value) => onChange({ phone: value })}
				/>
			</div>
		
			<div className="patient_personal_data__item">
				<VBInputSelect 
					label='Escolaridad'
					value={personalData.schoolGrade}
					placeholder='Elije un grado escolar'
					options={schoolGrades}
					onChange={(value) => onChange({ schoolGrade: value })}
				/>
			</div>

			<div className="patient_personal_data__item">
				<VBInputText 
					label='Ocupación'
					value={personalData.occupation}
					placeholder='Ej: Psicólogo'
					onChange={(value) => onChange({ occupation: value })}
				/>
			</div>

			<div className="patient_personal_data__item">
				<VBInputSelect 
					label='Estado civil'
					value={personalData.maritalStatus}
					placeholder='Elije un estado civil'
					options={marritage}
					onChange={(value) => onChange({ maritalStatus: value })}
				/>
			</div>
		
			<div className="patient_personal_data__item">
				<VBInputText 
					label='Religión'
					value={personalData.religion}
					placeholder='Ej: Católico'
					onChange={(value) => onChange({ religion: value })}
				/>
			</div>
		
			<div className="patient_personal_data__item">
				<VBInputText 
					label='Dirección'
					value={personalData.address}
					placeholder='Ej: Colmena, Nicolás Romero, Edo. Mex'
					onChange={(value) => onChange({ address: value })}
				/>
			</div>
		
		</section>

	)
}