//* Components
import { VBInputText } from '../../../../../ui/Components/Inputs/VBInputText'
import { VBInputSelect } from '../../../../../ui/Components/Inputs/VBInputSelect'
import { schoolGrades } from '../../../../../common/catalogs/school-grades.catalog'
import { marritage } from '../../../../../common/catalogs/marritage.catalog'

//* Interfaces
import type { SecondPatientData as SecondPatientDataI } from '../../../application/store/patient-form/patient-form-state.interface'


interface SecondPatientDataProps {
	secondPatientData: SecondPatientDataI;
	onChange: (data: Partial<SecondPatientDataI>) => void;
}

export const SecondPatientData = ({ secondPatientData, onChange }: SecondPatientDataProps) => {

	return (
		
		<section className='second_patient_data'>
		
			<div className="second_patient_data__item">
				<VBInputText 
					label='Nombre'
					value={secondPatientData.name}
					placeholder='Ej: Andrea Hernández'
					onChange={(value) => onChange({ name: value })}
				/>
			</div>
		
			<div className="second_patient_data__item second_patient_data__item--half">
				<VBInputText 
					label='Edad'
					value={secondPatientData.age}
					placeholder='Ej: 30'
					onChange={(value) => onChange({ age: value })}
				/>
			</div>
		
			<div className="second_patient_data__item second_patient_data__item--half">
				<VBInputText 
					label='Teléfono'
					value={secondPatientData.phone}
					placeholder='Ej: 55 5555 5555'
					onChange={(value) => onChange({ phone: value })}
				/>
			</div>
		
			<div className="second_patient_data__item">
				<VBInputSelect 
					label='Escolaridad'
					value={secondPatientData.schoolGrade}
					placeholder='Elije un grado escolar'
					options={schoolGrades}
					onChange={(value) => onChange({ schoolGrade: value })}
				/>
			</div>

			<div className="second_patient_data__item">
				<VBInputText 
					label='Ocupación'
					value={secondPatientData.occupation}
					placeholder='Ej: Psicólogo'
					onChange={(value) => onChange({ occupation: value })}
				/>
			</div>

			<div className="second_patient_data__item">
				<VBInputSelect 
					label='Estado civil'
					value={secondPatientData.maritalStatus}
					placeholder='Elije un estado civil'
					options={marritage}
					onChange={(value) => onChange({ maritalStatus: value })}
				/>
			</div>
		
			<div className="second_patient_data__item">
				<VBInputText 
					label='Religión'
					value={secondPatientData.religion}
					placeholder='Ej: Católico'
					onChange={(value) => onChange({ religion: value })}
				/>
			</div>
		
			<div className="second_patient_data__item">
				<VBInputText 
					label='Dirección'
					value={secondPatientData.address}
					placeholder='Ej: Colmena, Nicolás Romero, Edo. Mex'
					onChange={(value) => onChange({ address: value })}
				/>
			</div>
		
		</section>

	)
}