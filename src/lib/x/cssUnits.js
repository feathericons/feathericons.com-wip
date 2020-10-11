// Converts 16px -> 1rem.
export function rem(n) {
	const rem = n / 16
	return rem + "rem"
}

// Converts 16px -> 1em.
export function em(n) {
	const rem = n / 16
	return rem + "em"
}
