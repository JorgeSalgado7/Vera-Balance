import { PhoneFormatter } from "../../domain/services/PhoneFormatter"
import type { InputNumberEntity } from "../../domain/entities/inputs/InputEntity"

export const InputNumber = ({ phone, setPhone }: InputNumberEntity) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(PhoneFormatter.format(e.target.value))
  }

	return (

		<div className='input_container'>

			<label htmlFor="phone_number">Número de teléfono</label>

			<input 
				type="text" 
				value={phone}
        onChange={handleChange}
        placeholder="55 5555 5555"
			/>



		</div>
		
	)

}
