import type { InputDateEntity } from "../../domain/entities/inputs/InputDateEntity"

export const InputDate = ({ date, setDate, label }: InputDateEntity) => {


  return (

    <div className='input_container'>

      <label htmlFor="date_input">{label}</label>

      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        placeholder="Selecciona una fecha"
      />

    </div>

  )

}
