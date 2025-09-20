export class PhoneFormatter {
	
  static format(input: string): string {
    let digits = input.replace(/\D/g, "")
    digits = digits.substring(0, 10)
    if (digits.length > 6) return `${digits.substring(0, 2)} ${digits.substring(2, 6)} ${digits.substring(6)}`
    if (digits.length > 2) return `${digits.substring(0, 2)} ${digits.substring(2)}`
    return digits
  }

  static isValid(input: string): boolean {
    const digits = input.replace(/\D/g, "")
    return digits.length === 10
  }

}
