// import { Duomo } from "@zaydek/duomo/dist/runtime"

import Header from "./Header"
import React from "react"
import SearchApp from "./SearchApp"
import TopAnchors from "./TopAnchors"
import { DocumentTitle } from "./lib"
import { Route, Switch } from "react-router-dom"

function PageHome() {
	return (
		<DocumentTitle title="Feathericons">
			<div className="py-16 pb-0 xl:pb-64">
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
