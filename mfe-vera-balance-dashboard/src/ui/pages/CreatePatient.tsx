//* Components
import { DasboardLayout } from "../Layouts/DasboardLayout"
import { InputText } from '../Components/Inputs/InputText'
import { Card } from '../Components/Card';
import { InputSelect } from '../Components/Inputs/InputSelect'

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

							<div className="patients_create__card__form__grid__item">
								<InputText 
									label='Nombre'
									placeholder='Ej: Monica Vera'
								/>
							</div>

							<div className="patients_create__card__form__grid__item patients_create__card__form__grid__item--half">
								<InputText 
									label='Edad'
									placeholder='Ej: 18'
								/>
							</div>

							<div className="patients_create__card__form__grid__item patients_create__card__form__grid__item--half">
								<InputText 
									label='Teléfono'
									placeholder='Ej: 55 5555 5555'
								/>
							</div>

							<div className="patients_create__card__form__grid__item patients_create__card__form__grid__item--half">
								<InputSelect 
									label='Escolaridad'
									placeholder='Elije un grado escolar'
								/>
							</div>

							<div className="patients_create__card__form__grid__item patients_create__card__form__grid__item--half">
								<InputText 
									label='Ocupación'
									placeholder='Ej: Psicólogo'
								/>
							</div>

							<div className="patients_create__card__form__grid__item patients_create__card__form__grid__item--half">
								<InputSelect 
									label='Estado civil'
									placeholder='Elije un estado civil'
								/>
							</div>

							<div className="patients_create__card__form__grid__item patients_create__card__form__grid__item--half">
								<InputText 
									label='Religión'
									placeholder='Ej: Católico'
								/>
							</div>

						</section>

					</form>

				</Card>
				
			</div>

		</DasboardLayout>

	)
}
