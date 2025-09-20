import type { InputDurationEntity } from "../../domain/entities/inputs/InputDurationEntity"

export const InputDuration = ({ value, setValue, label }: InputDurationEntity) => {

  return (
    <div className='input_container'>

      <label htmlFor="duration_select">{label}</label>

      <select id="duration_select" value={value} onChange={e => setValue(e.target.value)}>

        <option value="1 hora">1 hora</option>
        <option value="30 minutos">30 minutos</option>
      </select>

    </div>

  )
	
}
