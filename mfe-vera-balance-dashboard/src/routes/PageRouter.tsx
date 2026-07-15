import { BrowserRouter, Route, Routes } from "react-router";

//* Pages
import { Dashboard } from "../ui/Dashboard";
import { Patients } from "../ui/pages/Patients";
import { CreatePatient } from "../ui/pages/CreatePatient";

export const PageRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route  path="/dashboard" element={<Dashboard />}/>
				<Route path="/pacientes" element={<Patients />} />
				<Route path="/pacientes/crear" element={<CreatePatient />} />
				{/* <Route path="/pacientes/:patientId" element={<PatientRecord />} />
				<Route path="/pacientes/:patientId/editar" element={<EditPatient />} /> */}
			</Routes>
		</BrowserRouter>
	)
}
