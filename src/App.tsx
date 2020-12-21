import Header from "./Header"
import React from "react"
import SearchApp from "./SearchApp"
import TopAnchors from "./TopAnchors"
import { DocumentTitle } from "./lib"
// import { Duomo } from "@zaydek/duomo/dist/runtime"
import { Route, Switch } from "react-router-dom"

// type DEV_MODE = "development" | "production"

function PageHome() {
	// useEffect(() => {
	// 	document.body.parentElement!.classList.add("bg-screen")
	// }, [])
	//
	// useEffect(() => {
	// 	return Duomo.init(process.env.NODE_ENV as DEV_MODE)
	// }, [])

	return (
		<DocumentTitle title="Feathericons">
			<div className="py-16 xl:pb-64">
				<TopAnchors />
				<Header />
				<SearchApp />
			</div>
		</DocumentTitle>
	)
}

export default function Router() {
	return (
		<Switch>
			<Route path="/" exact>
				<PageHome />
			</Route>
		</Switch>
	)
}
