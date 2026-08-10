export const getInitials = (value: string): string => {
	return value
		.split(' ')
		.filter(Boolean)
		.slice(0, 2)
		.map(word => word.charAt(0))
		.join('')
		.toUpperCase()
}