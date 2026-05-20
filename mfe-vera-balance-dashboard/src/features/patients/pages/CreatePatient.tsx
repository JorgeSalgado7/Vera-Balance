//* Style
import '../scss/patients_create.scss'

//* Components
import { DasboardLayout } from "../../../ui/Layouts/DasboardLayout"
import { InputText } from '../../../ui/Components/Inputs/InputText'
import { Card } from '../../../ui/Components/Card';
import { InputSelect } from '../../../ui/Components/Inputs/InputSelect';

export const CreatePatient = () => {
	return (

		<DasboardLayout>
			
			<div className="container patients_create">

				<Card customClass="patients_create__card">

					<h2>Crea un paciente</h2>
					<p>Completa sus datos personales e información sobre la terapia.</p>

					{/** Form */}
					<form className='patients_create__card__form'>

						{/** Patient data */}
						<div className="patients_create__card__form__title">
							<div className='patients_create__card__form__title--step'>1</div>
							<h3 className='patients_create__card__form__title--text'>Datos personales</h3>
						</div>

						<section  className='patients_create__card__form__grid'>

							<InputText 
								label='Nombre'
								placeholder='Monica Vera'
							/>

							<InputText 
								label='Edad'
								placeholder='18'
							/>

							<InputText 
								label='Teléfono'
								placeholder='55 5555 5555'
							/>

							
							<div>
								<InputSelect 
								label='Escolaridad'
								placeholder='Psicóloga'
							/>
							</div>

							<InputSelect 
								label='Ocupación'
								placeholder='Psicóloga'
							/>

							<InputSelect 
								label='Estado civil'
								placeholder='Psicóloga'
							/>

							<InputSelect 
								label='Religión'
								placeholder='Psicóloga'
							/>


						</section>

						

					</form>


				</Card>
				
			</div>

		</DasboardLayout>

	)
}
