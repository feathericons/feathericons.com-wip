import Header from "./Header"
import IconGrid from "./SearchApp/IconGrid"
import React from "react"
import SearchApp from "./SearchApp"
import TopAnchors from "./TopAnchors"
import { DocumentTitle } from "./lib"
import { Route, Switch, useParams } from "react-router-dom"

function Homepage() {
	return (
		<DocumentTitle title="Feathericons">
			<div className="py-16 pb-0 xl:pb-64">
				<TopAnchors />
				<Header />
				<SearchApp>
					<IconGrid />
				</SearchApp>
			</div>
		</DocumentTitle>
	)
}

interface Keys {
	[key: string]: string
}

function IconPage() {
	const { name } = useParams() as Keys

	return (
		<DocumentTitle title="Feathericons">
			<div className="py-16 pb-0 xl:pb-64">
				<TopAnchors />
				<Header />
				<SearchApp>
					<div>{name}</div>
				</SearchApp>
			</div>
		</DocumentTitle>
	)
}

export default function Router() {
	return (
		<Switch>
			<Route path="/:name">
				<IconPage />
			</Route>
			<Route path="*">
				<Homepage />
			</Route>
		</Switch>
	)
}
