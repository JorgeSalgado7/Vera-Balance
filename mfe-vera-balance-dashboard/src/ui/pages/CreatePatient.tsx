//* Components
import { DasboardLayout } from "../Layouts/DashboardLayouts/DasboardLayout"
import { Card } from '../Components/Card';
import { PatientPersonalData } from "../../features/patients/components/PatientPersonalData";
import { TerapyData } from "../../features/patients/components/TerapyData";
import { TitleSection } from "../Layouts/DashboardLayouts/TitleSection";

export const CreatePatient = () => {
	return (

		<DasboardLayout>
			
			<div className="patients_create">

				<Card customClass="patients_create__card">

					<h2>Crea un paciente</h2>
					<p>Completa sus datos personales e información sobre la terapia.</p>

					{/** Form */}
					<form className='patients_create__card__form' onSubmit={e => { e.preventDefault() }}>

						<TitleSection step={'1'} title={'Datos del paciente'}/>
						<PatientPersonalData />
						<TitleSection step={'2'} title={'Sobre la terapia'}/>
						<TerapyData />

						<button className="vb_btn vb_btn--pink"type="submit">
							Crear paciente
						</button>

					</form>

				</Card>
				
			</div>

		</DasboardLayout>

	)
}
