//* Components
import { DasboardLayout } from "../Layouts/DashboardLayouts/DasboardLayout"
import { VBCard } from '../Components/VBCard';
import { PatientPersonalData } from "../../features/patients/components/PatientPersonalData";
import { TherapyData } from "../../features/patients/components/TherapyData";
import { VBTitleSection} from "../Layouts/DashboardLayouts/VBTitleSection";
import { VBLoadingModal } from "../Components/Modals/VBLoadingModal";

export const CreatePatient = () => {
	return (

		<DasboardLayout>
			
			<div className="patients_create">

				<VBCard customClass="patients_create__card">

					<h2>Crea un paciente</h2>
					<p>Completa sus datos personales e información sobre la terapia.</p>

					{/** Form */}
					<form className='patients_create__card__form' onSubmit={e => { e.preventDefault() }}>

						<VBTitleSection step={'1'} title={'Datos del paciente'}/>
						<PatientPersonalData />
						<VBTitleSection step={'2'} title={'Sobre la terapia'}/>
						<TherapyData />

						<button className="vb_btn vb_btn--pink"type="submit">
							Crear paciente
						</button>

					</form>

				</VBCard>
				
			</div>

			<VBLoadingModal  isOpen={false} />

		</DasboardLayout>

	)
}
