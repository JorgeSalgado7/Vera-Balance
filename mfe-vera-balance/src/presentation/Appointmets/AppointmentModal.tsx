import { useState } from "react"

import { InputText } from "../Inputs/InputText"
import { InputDate } from "../Inputs/InputDate"
import { InputTime } from "../Inputs/InputTime"
import { InputDuration } from "../Inputs/InputDuration"
import { PrimaryButton } from "../Buttons/PrimaryButton"
import { InputMoney } from "../Inputs/InputMoney"

type Open = {
	open: boolean
	setOpen: (open: boolean) => void
}

export const AppointmentModal = ({ open, setOpen }: Open) => {
	
	const [patient, setPatient] = useState<string>("")
	const [date, setDate] = useState<string>("")
	const [hour, setHour] = useState<string>("")
	const [duration, setDuration] = useState<string>("")
	const [amount, setAmount] = useState<string>("")
	
	return (

		<div className={`appointment_modal ${ open ? 'appointment_modal--open' : '' } `}>

			<div className="container">

				<form className="appointment_modal__form">

					<div className="appointment_modal__form__header">

						<h1>Crea un voucher</h1>

						<button 
							className="appointment_modal__form__header--close btn"
							type="button"
							onClick={() => setOpen(false)}
						>
							<i className="bi bi-x-lg"></i>
						</button>

					</div>

					<InputText 
						text={patient}
						setText={setPatient}
						label="Paciente:"
						placeholder=""
					/>

					<InputDate
						date={date}
						setDate={setDate}
						label="Selecciona la fecha de la sesión"
					/>

					<InputTime
						time={hour}
						setTime={setHour}
						label="Selecciona la hora de la sesión"
					/>

					<InputDuration
						value={duration}
						setValue={setDuration}
						label="Selecciona la duración de la sesión"
					/>

					<InputMoney
						amount={amount}
						setAmount={setAmount}
						label="Monto cobrado"
					/>

					<PrimaryButton
						text="Crear voucher"
					/>

				</form>

			</div>

		</div>

	)

}
