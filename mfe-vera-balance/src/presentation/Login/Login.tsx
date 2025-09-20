import { useState } from 'react'
import Logo from '../../img/logo.svg'
import { InputNumber } from '../Inputs/InputNumber'
import { PrimaryButton } from '../Buttons/PrimaryButton'

export const Login = () => {

	const [phone, setPhone] = useState("")

	return (

		<div className='login'>

			<div className="container">

				<div className="login__logo_container">
					<img src={ Logo } alt="" loading='lazy' />
				</div>
				
				<form className='login__form'>

					<InputNumber
						phone={phone}
						setPhone={setPhone}
					/>

					<PrimaryButton text='Ingresar' />

				</form>

			</div>

		</div>
	)

}
