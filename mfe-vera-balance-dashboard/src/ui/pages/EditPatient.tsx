//* Components
import { DasboardLayout } from "../Layouts/DashboardLayouts/DasboardLayout"
import { VBCard } from '../Components/VBCard';
import { PatientPersonalData } from "../../features/patients/components/PatientPersonalData";
import { TherapyData } from "../../features/patients/components/TherapyData";
import { VBTitleSection} from "../Layouts/DashboardLayouts/VBTitleSection";
import { VBLoadingModal } from "../Components/Modals/VBLoadingModal";

export const EditPatient = () => {
	return (

		<DasboardLayout>
			
			<div className="patients_edit">

				<VBCard customClass="patients_edit__card">

					<h2>Edita un paciente</h2>
					<p>Actualiza sus datos personales e información sobre la terapia.</p>

					{/** Form */}
					<form className='patients_edit__card__form' onSubmit={e => { e.preventDefault() }}>

						<VBTitleSection step={'1'} title={'Datos del paciente'}/>
						<PatientPersonalData />
						<VBTitleSection step={'2'} title={'Sobre la terapia'}/>
						<TherapyData />

						<button className="vb_btn vb_btn--pink"type="submit">
							Guardar cambios
						</button>

					</form>

				</VBCard>
				
			</div>

			<VBLoadingModal  isOpen={false} />

		</DasboardLayout>

	)
}