import Content from "./Content"
import React from "react"
import Sidebar from "./Sidebar"
import vars from "./vars"

export default function SearchApp() {
	return (
		<div className="hstack">
			<div className={`hstack w-full max-w-xl bg-search-app xl:rounded-${vars.rounded} shadow shadow-px shadow-md`}>
				<Content />
				<Sidebar />
			</div>
		</div>
	)
}
