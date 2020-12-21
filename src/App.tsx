import Header from "./Header"
import React, { useEffect } from "react"
import SearchApp from "./SearchApp"
import TopRow from "./TopRow"
import { DocumentTitle } from "./lib"
import { Duomo } from "@zaydek/duomo/dist/runtime"
import { Route, Switch } from "react-router-dom"

function Home() {
	useEffect(() => {
		type DevMode = "development" | "production"
		return Duomo.init(process.env.NODE_ENV as DevMode)
	}, [])

	return (
		// data-debug data-debug-space
		<div className="py-16 xl:pb-64 bg-gray-50">
			<style>{`
				:root {
					--border-color-default: hsl(var(--gray-200));
				}
			`}</style>
			<TopRow />
			<Header />
			<SearchApp />
		</div>
	)
}

export default function Router() {
	return (
		<Switch>
			<Route path="/" exact>
				<DocumentTitle title="Feathericons">
					<Home />
				</DocumentTitle>
			</Route>
		</Switch>
	)
}
