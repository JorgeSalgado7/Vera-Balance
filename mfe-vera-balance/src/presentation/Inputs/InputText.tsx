import type { InputTextEntity } from "../../domain/entities/inputs/InputTextEntity"

export const InputText = ({ text, setText, label, placeholder }: InputTextEntity) => {

  return (

    <div className='input_container'>

      <label htmlFor="text_input">{label}</label>

      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder={placeholder}
      />

    </div>

  )
}
