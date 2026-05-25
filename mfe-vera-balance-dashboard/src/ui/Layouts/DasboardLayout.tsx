//* Types
import { HeaderLayout } from "./HeaderLayout"
import type { DashboardI } from "../Interfaces/Dashboard/dashboard.interface"
import { SidebarMenu } from "./SidebarMenu"

//*Components


export const DasboardLayout = ({ children }: DashboardI) => {
	return (
		<div className="dashboard_layout">

			<SidebarMenu />

			<main className="dashboard_layout__main">
				<HeaderLayout />
				
					<section className="container">{children}</section>

			</main>

		</div>
	)
}
