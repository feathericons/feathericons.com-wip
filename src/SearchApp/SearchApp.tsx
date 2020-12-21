import config from "./config"
import Content from "./Content"
import React from "react"
import Sidebar from "./Sidebar"

export default function SearchApp() {
	return (
		<div className="hstack">
			<div className={`hstack w-full max-w-xl bg-search-app xl:rounded-${config.rounded} shadow shadow-px shadow-md`}>
				<Content />
				<Sidebar />
			</div>
		</div>
	)
}
