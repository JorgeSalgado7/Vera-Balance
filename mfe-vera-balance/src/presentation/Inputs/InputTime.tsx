import type { InputTimeEntity } from "../../domain/entities/inputs/InputTimeEntity"

export const InputTime = ({ time, setTime, label }: InputTimeEntity) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value)
  }

  return (

    <div className='input_container'>

      <label htmlFor="time_input">{label}</label>

      <input
        type="time"
        value={time}
        onChange={handleChange}
        placeholder="Selecciona una hora"
      />
			
    </div>

  )
}
