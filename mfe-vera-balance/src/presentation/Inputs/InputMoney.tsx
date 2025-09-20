import { useState } from "react"
import type { InputMoneyEntity } from "../../domain/entities/inputs/InputMoneyEntity"

export const InputMoney = ({ amount, setAmount, label }: InputMoneyEntity) => {
  
	const [inputValue, setInputValue] = useState(amount)

  const handleBlur = () => {
    
    const cleanValue = inputValue.replace(/[^0-9.]/g, '')
    const number = Number(cleanValue)
    if (!isNaN(number)) {
      const formatted = number.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })
      setInputValue(formatted)
      setAmount(formatted)
    } else {
      setInputValue('')
      setAmount('')
    }
  }

  return (
    <div className='input_container'>
      {label && <label htmlFor="money_input">{label}</label>}
      <input
        type="text"
        id="money_input"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="$0.00"
      />
    </div>
  )
}
