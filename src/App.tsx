import Header from "./Header"
import React, { useEffect } from "react"
import SearchApp from "./SearchApp"
import TopAnchors from "./TopAnchors"
import { DocumentTitle } from "./lib"
import { Duomo } from "@zaydek/duomo/dist/runtime"
import { Route, Switch } from "react-router-dom"

type DevMode = "development" | "production"

function PageHome() {
	useEffect(() => {
		return Duomo.init(process.env.NODE_ENV as DevMode)
	}, [])

	return (
		<DocumentTitle title="Feathericons">
			<div className="py-16 xl:pb-64 bg-gray-50">
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
