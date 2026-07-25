import { useEffect } from 'react';

//* Components
import { DasboardLayout } from "../../../../ui/Layouts/DashboardLayouts/DasboardLayout"
import { VBCard } from '../../../../ui/Components/VBCard';
import { TherapyTypeData } from "../components/PatientForm/TherapyTypeData";
import { PatientPersonalData } from "../components/PatientForm/PatientPersonalData";
import { PatientGuardianData } from "../components/PatientForm/PatientGuardianData";
import { PatientPartnerData } from "../components/PatientForm/PatientPartnerData";
import { SecondPatientData } from "../components/PatientForm/SecondPatientData";
import { TherapyData } from "../components/PatientForm/TherapyData";
import { VBTitleSection} from "../../../../ui/Layouts/DashboardLayouts/VBTitleSection";
import { VBLoadingModal } from "../../../../ui/Components/Modals/VBLoadingModal";

//* Hooks
import { usePatientForm } from "../../hooks/usePatientForm";
import { useCreatePatient } from "../../hooks/useCreatePatient";

export const CreatePatient = () => {

	const {
		patientForm,
		personalData,
		therapyData,
		guardianData,
		partnerData,
		secondPatientData,
		hasSelectedTherapyType,
		shouldShowGuardianData,
		shouldShowPartnerData,
		shouldShowSecondPatientData,
		handleUpdatePersonalData,
		handleUpdateTherapyData,
		handleUpdateGuardianData,
		handleUpdatePartnerData,
		handleUpdateSecondPatientData,
		handleResetPatientForm
	} = usePatientForm()

	const {
		isLoading,
		handleCreatePatient
	} = useCreatePatient()

	useEffect(() => {
		handleResetPatientForm()
	}, [handleResetPatientForm])

	const guardianStep = 3
	const partnerStep = shouldShowGuardianData ? 4 : 3
	const secondPatientStep = shouldShowGuardianData ? 4 : 3
	const therapyStep = 3 + Number(shouldShowGuardianData) + Number(shouldShowPartnerData || shouldShowSecondPatientData)

	const handleSubmit = async () => {
		await handleCreatePatient(patientForm)
	}

	return (

		<DasboardLayout>
			
			<div className="patients_create">

				<VBCard customClass="patients_create__card">

					<h2>Crea un paciente</h2>
					<p>Completa sus datos personales e información sobre la terapia.</p>

					{/** Form */}
					<form className='patients_create__card__form' onSubmit={e => { e.preventDefault(); handleSubmit() }}>

						<VBTitleSection step={'1'} title={'Tipo de terapia'}/>
						<TherapyTypeData therapyData={therapyData} onChange={handleUpdateTherapyData}/>

						{ hasSelectedTherapyType &&
							<>
								<VBTitleSection step={'2'} title={'Datos del paciente'}/>
								<PatientPersonalData personalData={personalData} onChange={handleUpdatePersonalData}/>

								{ shouldShowGuardianData &&
									<>
										<VBTitleSection step={`${guardianStep}`} title={'Tutor o responsable'}/>
										<PatientGuardianData guardianData={guardianData} onChange={handleUpdateGuardianData}/>
									</>
								}

								{ shouldShowPartnerData &&
									<>
										<VBTitleSection step={`${partnerStep}`} title={'Datos de la pareja'}/>
										<PatientPartnerData partnerData={partnerData} onChange={handleUpdatePartnerData}/>
									</>
								}

								{ shouldShowSecondPatientData &&
									<>
										<VBTitleSection step={`${secondPatientStep}`} title={'Segundo paciente'}/>
										<SecondPatientData secondPatientData={secondPatientData} onChange={handleUpdateSecondPatientData}/>
									</>
								}

								<VBTitleSection step={`${therapyStep}`} title={'Sobre la terapia'}/>
								<TherapyData therapyData={therapyData} onChange={handleUpdateTherapyData}/>

								<button className="vb_btn vb_btn--pink"type="submit">Crear paciente</button>
							</>
						}

					</form>

				</VBCard>
				
			</div>

			<VBLoadingModal isOpen={isLoading} />

		</DasboardLayout>

	)
}