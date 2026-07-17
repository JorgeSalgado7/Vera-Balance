import { BrowserRouter, Route, Routes } from 'react-router';

import { ROUTES } from '../common/constants/routes.constant';

import { Dashboard } from '../ui/Dashboard';
import { Patients } from '../ui/pages/Patients';
import { CreatePatient } from '../ui/pages/CreatePatient';
import { EditPatient } from '../ui/pages/EditPatient';

export const PageRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
				<Route path={ROUTES.PATIENTS.LIST} element={<Patients />} />
				<Route path={ROUTES.PATIENTS.CREATE} element={<CreatePatient />} />
				<Route path={ROUTES.PATIENTS.EDIT(':patientId')} element={<EditPatient />} />
			</Routes>
		</BrowserRouter>
	);
};