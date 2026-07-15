//* Styles
import '../scss/patient-personal-data.scss'

//* Components
import { VBInputText } from "../../../ui/Components/Inputs/VBInputText"
import { VBInputSelect } from "../../../ui/Components/Inputs/VBInputSelect"
import { schoolGrades } from '../../../common/catalogs/school-grades.catalog'
import { marritage } from '../../../common/catalogs/marritage.catalog'


export const PatientPersonalData = () => {
	return (
		
		<section  className='patient_personal_data'>
		
			<div className="patient_personal_data__item">
				<VBInputText 
					label='Nombre'
					placeholder='Ej: Monica Vera'
				/>
			</div>
		
			<div className="patient_personal_data__item patient_personal_data__item--half">
				<VBInputText 
					label='Edad'
					placeholder='Ej: 18'
				/>
			</div>
		
			<div className="patient_personal_data__item patient_personal_data__item--half">
				<VBInputText 
					label='Teléfono'
					placeholder='Ej: 55 5555 5555'
				/>
			</div>
		
			<div className="patient_personal_data__item">
				<VBInputSelect 
					label='Escolaridad'
					placeholder='Elije un grado escolar'
					options={schoolGrades}
				/>
			</div>

			<div className="patient_personal_data__item">
				<VBInputText 
					label='Ocupación'
					placeholder='Ej: Psicólogo'
				/>
			</div>

			<div className="patient_personal_data__item">
				<VBInputSelect 
					label='Estado civil'
					placeholder='Elije un estado civil'
					options={marritage}
				/>
			</div>
		
			<div className="patient_personal_data__item">
				<VBInputText 
					label='Religión'
					placeholder='Ej: Católico'
				/>
			</div>
		
			<div className="patient_personal_data__item">
				<VBInputText 
					label='Dirección'
					placeholder='Ej: Colmena, Nicolás Romero, Edo. Mex'
				/>
			</div>

		
		
		</section>

	)
}
