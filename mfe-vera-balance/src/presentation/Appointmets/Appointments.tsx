import { useState } from 'react'

import { PrimaryButton } from '../Buttons/PrimaryButton'
import { AppointmentCard } from './AppointmentCard'
import { AppointmentModal } from './AppointmentModal'

export const Appointments = () => {

	const [openModal, setOpenModal] = useState<boolean>(false)

	return (
		
		<>

			<div className='appointment'>

				<div className="container">

					<h1>Mis vouchers</h1>

					<div className='appointment__toolbar'>

						<PrimaryButton
							text='Crear voucher'
							icon='bi bi-plus-lg'
							action={ () => setOpenModal(true)}
						/>

					</div>

				</div>

			</div>
		
			<AppointmentModal 
				open={openModal}  
				setOpen={setOpenModal}
			/>

			{/* <AppointmentCard /> */}
		
		</>

	)
}
