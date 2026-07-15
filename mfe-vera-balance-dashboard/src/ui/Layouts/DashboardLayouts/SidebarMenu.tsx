//* React router
import { Link } from 'react-router';


export const SidebarMenu = () => {
	return (
		<aside className="sidebar_menu">

			{/** Logo */}
			<div className="sidebar_menu__logo"></div>

			<nav className='sidebar_menu__nav'>

				<Link className='sidebar_menu__nav__link' to='/dashboard'>
					<i className="bi bi-grid"></i>
					Dashboard
				</Link>
				
				<Link className='sidebar_menu__nav__link' to='/pacientes'>
					<i className="bi bi-people"></i>
					Pacientes
				</Link>

			</nav>

			
		</aside>
	)
}
