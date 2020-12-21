import React from "react"
import Sidebar from "./Sidebar"
import v from "./vars"

interface SearchAppProps {
	children?: React.ReactNode
}

export default function SearchApp({ children }: SearchAppProps) {
	return (
		<div className="hstack">
			<div
				className={`hstack align-start w-full max-w-xl bg-search-app xl:rounded-${v.rounded} shadow shadow-px shadow-md`}
			>
				<div className="spacer">{children}</div>
				<Sidebar />
			</div>
		</div>
	)
}
