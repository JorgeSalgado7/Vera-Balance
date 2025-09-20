export const moneyFormatter = (value: string) => {
  // Eliminar cualquier caracter que no sea dígito o punto
  const cleanValue = value.replace(/[^0-9.]/g, '')

  // Separar parte entera y decimal
  const parts = cleanValue.split('.')

  // Tomar solo los primeros dos decimales si existen
  const integerPart = parts[0] || '0'
  const decimalPart = parts[1]?.slice(0, 2) || ''

  const number = Number(`${integerPart}.${decimalPart}`)

  if (isNaN(number)) return ''

  // Formatear a moneda
  return number.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })
}
