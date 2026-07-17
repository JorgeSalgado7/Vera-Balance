export const ROUTES = {
	DASHBOARD: '/dashboard',

	PATIENTS: {
		LIST: '/pacientes',
		CREATE: '/pacientes/crear',
		DETAIL: (patientId: string) => `/pacientes/${patientId}`,
		EDIT: (patientId: string) =>`/pacientes/${patientId}/editar`,
	},

	CLINICAL_FOLLOW_UP: '/seguimiento-clinico',
} as const;