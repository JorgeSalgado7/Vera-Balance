//* Components
import { DasboardLayout } from "../Layouts/DasboardLayout"
import { Card } from '../Components/Card';
import { PatientPersonalData } from "../../features/patients/components/PatientPersonalData";
import { TerapyData } from "../../features/patients/components/TerapyData";

export const CreatePatient = () => {
	return (

		<DasboardLayout>
			
			<div className="patients_create">

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

						<PatientPersonalData />

						{/** Terapy data */}
						<div className="patients_create__card__form__title patients_create__card__form__title__2">
							<div className='patients_create__card__form__title--step'>2</div>
							<h3 className='patients_create__card__form__title--text'>Sobre la terapia</h3>
						</div>

						<TerapyData />

					</form>

				</Card>
				
			</div>

		</DasboardLayout>

	)
}
