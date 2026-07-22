//* Components
import { VBInputText } from '../../../../../ui/Components/Inputs/VBInputText'
import { VBInputSelect } from '../../../../../ui/Components/Inputs/VBInputSelect'
import { schoolGrades } from '../../../../../common/catalogs/school-grades.catalog'
import { marritage } from '../../../../../common/catalogs/marritage.catalog'
import { useCreatePatient } from '../../../hooks/useCreatePatient'


export const SecondPatientData = () => {

	const { secondPatientData, handleUpdateSecondPatientData } = useCreatePatient()

	return (
		
		<section className='second_patient_data'>
		
			<div className="second_patient_data__item">
				<VBInputText 
					label='Nombre'
					value={secondPatientData.name}
					placeholder='Ej: Andrea Hernández'
					onChange={(value) => handleUpdateSecondPatientData({ name: value })}
				/>
			</div>
		
			<div className="second_patient_data__item second_patient_data__item--half">
				<VBInputText 
					label='Edad'
					value={secondPatientData.age}
					placeholder='Ej: 30'
					onChange={(value) => handleUpdateSecondPatientData({ age: value })}
				/>
			</div>
		
			<div className="second_patient_data__item second_patient_data__item--half">
				<VBInputText 
					label='Teléfono'
					value={secondPatientData.phone}
					placeholder='Ej: 55 5555 5555'
					onChange={(value) => handleUpdateSecondPatientData({ phone: value })}
				/>
			</div>
		
			<div className="second_patient_data__item">
				<VBInputSelect 
					label='Escolaridad'
					value={secondPatientData.schoolGrade}
					placeholder='Elije un grado escolar'
					options={schoolGrades}
					onChange={(value) => handleUpdateSecondPatientData({ schoolGrade: value })}
				/>
			</div>

			<div className="second_patient_data__item">
				<VBInputText 
					label='Ocupación'
					value={secondPatientData.occupation}
					placeholder='Ej: Psicólogo'
					onChange={(value) => handleUpdateSecondPatientData({ occupation: value })}
				/>
			</div>

			<div className="second_patient_data__item">
				<VBInputSelect 
					label='Estado civil'
					value={secondPatientData.maritalStatus}
					placeholder='Elije un estado civil'
					options={marritage}
					onChange={(value) => handleUpdateSecondPatientData({ maritalStatus: value })}
				/>
			</div>
		
			<div className="second_patient_data__item">
				<VBInputText 
					label='Religión'
					value={secondPatientData.religion}
					placeholder='Ej: Católico'
					onChange={(value) => handleUpdateSecondPatientData({ religion: value })}
				/>
			</div>
		
			<div className="second_patient_data__item">
				<VBInputText 
					label='Dirección'
					value={secondPatientData.address}
					placeholder='Ej: Colmena, Nicolás Romero, Edo. Mex'
					onChange={(value) => handleUpdateSecondPatientData({ address: value })}
				/>
			</div>
		
		</section>

	)
}