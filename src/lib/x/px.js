// Converts 16px -> 1rem.
export default function px(n) {
	const rem = n / 16
	return rem + "rem"
}
