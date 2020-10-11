import { useEffect } from "react"

export default function DocumentTitle({ title, children }) {
	useEffect(() => {
		const originalTitle = document.title
		document.title = title
		return () => {
			document.title = originalTitle
		}
	}, [title])

	return children || null
}
