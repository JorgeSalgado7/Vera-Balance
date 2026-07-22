//* Components
import { DasboardLayout } from "../../../../ui/Layouts/DashboardLayouts/DasboardLayout"
import { VBCard } from '../../../../ui/Components/VBCard';
import { TherapyTypeData } from "../components/TherapyTypeData";
import { PatientPersonalData } from "../components/CreatePatient/PatientPersonalData";
import { PatientGuardianData } from "../components/CreatePatient/PatientGuardianData";
import { PatientPartnerData } from "../components/CreatePatient/PatientPartnerData";
import { SecondPatientData } from "../components/CreatePatient/SecondPatientData";
import { TherapyData } from "../components/CreatePatient/TherapyData";
import { VBTitleSection} from "../../../../ui/Layouts/DashboardLayouts/VBTitleSection";
import { VBLoadingModal } from "../../../../ui/Components/Modals/VBLoadingModal";

//* Hooks
import { useCreatePatient } from "../../hooks/useCreatePatient";

export const CreatePatient = () => {

	const {
		hasSelectedTherapyType,
		shouldShowGuardianData,
		shouldShowPartnerData,
		shouldShowSecondPatientData
	} = useCreatePatient()

	const guardianStep = 3
	const partnerStep = shouldShowGuardianData ? 4 : 3
	const secondPatientStep = shouldShowGuardianData ? 4 : 3
	const therapyStep = 3 + Number(shouldShowGuardianData) + Number(shouldShowPartnerData || shouldShowSecondPatientData)

	return (

		<DasboardLayout>
			
			<div className="patients_create">

				<VBCard customClass="patients_create__card">

					<h2>Crea un paciente</h2>
					<p>Completa sus datos personales e información sobre la terapia.</p>

					{/** Form */}
					<form className='patients_create__card__form' onSubmit={e => { e.preventDefault() }}>

						<VBTitleSection step={'1'} title={'Tipo de terapia'}/>
						<TherapyTypeData />

						{ hasSelectedTherapyType &&
							<>
								<VBTitleSection step={'2'} title={'Datos del paciente'}/>
								<PatientPersonalData />

								{ shouldShowGuardianData &&
									<>
										<VBTitleSection step={`${guardianStep}`} title={'Tutor o responsable'}/>
										<PatientGuardianData />
									</>
								}

								{ shouldShowPartnerData &&
									<>
										<VBTitleSection step={`${partnerStep}`} title={'Datos de la pareja'}/>
										<PatientPartnerData />
									</>
								}

								{ shouldShowSecondPatientData &&
									<>
										<VBTitleSection step={`${secondPatientStep}`} title={'Segundo paciente'}/>
										<SecondPatientData />
									</>
								}

								<VBTitleSection step={`${therapyStep}`} title={'Sobre la terapia'}/>
								<TherapyData />

								<button className="vb_btn vb_btn--pink"type="submit">Crear paciente</button>
							</>
						}

					</form>

				</VBCard>
				
			</div>

			<VBLoadingModal  isOpen={false} />

		</DasboardLayout>

	)
}