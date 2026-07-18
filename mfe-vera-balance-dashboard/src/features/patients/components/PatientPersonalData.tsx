//* Styles
import '../scss/patient-personal-data.scss'

//* Components
import { VBInputText } from "../../../ui/Components/Inputs/VBInputText"
import { VBInputSelect } from "../../../ui/Components/Inputs/VBInputSelect"
import { schoolGrades } from '../../../common/catalogs/school-grades.catalog'
import { marritage } from '../../../common/catalogs/marritage.catalog'
import { useCreatePatient } from '../application/hooks/useCreatePatient'


export const PatientPersonalData = () => {

	const { personalData,handleUpdatePersonalData } = useCreatePatient()

	return (
		
		<section  className='patient_personal_data'>
		
			<div className="patient_personal_data__item">
				<VBInputText 
					label='Nombre'
					value={personalData.name}
					placeholder='Ej: Monica Vera'
					onChange={(value) => handleUpdatePersonalData({ name: value })}
				/>
			</div>
		
			<div className="patient_personal_data__item patient_personal_data__item--half">
				<VBInputText 
					label='Edad'
					value={personalData.age}
					placeholder='Ej: 18'
					onChange={(value) => handleUpdatePersonalData({ age: value })}
				/>
			</div>
		
			<div className="patient_personal_data__item patient_personal_data__item--half">
				<VBInputText 
					label='Teléfono'
					value={personalData.phone}
					placeholder='Ej: 55 5555 5555'
					onChange={(value) => handleUpdatePersonalData({ phone: value })}
				/>
			</div>
		
			<div className="patient_personal_data__item">
				<VBInputSelect 
					label='Escolaridad'
					value={personalData.schoolGrade}
					placeholder='Elije un grado escolar'
					options={schoolGrades}
					onChange={(value) => handleUpdatePersonalData({ schoolGrade: value })}
				/>
			</div>

			<div className="patient_personal_data__item">
				<VBInputText 
					label='Ocupación'
					value={personalData.occupation}
					placeholder='Ej: Psicólogo'
					onChange={(value) => handleUpdatePersonalData({ occupation: value })}
				/>
			</div>

			<div className="patient_personal_data__item">
				<VBInputSelect 
					label='Estado civil'
					value={personalData.maritalStatus}
					placeholder='Elije un estado civil'
					options={marritage || undefined}
					onChange={(value) => handleUpdatePersonalData({ maritalStatus: value })}
				/>
			</div>
		
			<div className="patient_personal_data__item">
				<VBInputText 
					label='Religión'
					value={personalData.religion}
					placeholder='Ej: Católico'
					onChange={(value) => handleUpdatePersonalData({ religion: value })}
				/>
			</div>
		
			<div className="patient_personal_data__item">
				<VBInputText 
					label='Dirección'
					value={personalData.address}
					placeholder='Ej: Colmena, Nicolás Romero, Edo. Mex'
					onChange={(value) => handleUpdatePersonalData({ address: value })}
				/>
			</div>
		
		</section>

	)
}