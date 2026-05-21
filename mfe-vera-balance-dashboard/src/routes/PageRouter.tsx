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
				<Route  path="/patients" element={<Patients />}/>
				<Route  path="/patients/create" element={<CreatePatient />}/>
			</Routes>
		</BrowserRouter>
	)
}
