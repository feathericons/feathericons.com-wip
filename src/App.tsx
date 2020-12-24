import Header from "./Header"
import IconInfo from "./SearchApp/IconInfo"
import Icons from "./SearchApp/Icons"
import React from "react"
import SearchApp from "./SearchApp"
import { DocumentTitle } from "./lib"
import { Route, Switch /* useParams */ } from "react-router-dom"

function Homepage() {
	return (
		<DocumentTitle title="Feathericons">
			<div className="xl:pb-64">
				<Header />
				<SearchApp>
					<Icons />
				</SearchApp>
			</div>
		</DocumentTitle>
	)
}

// interface Keys {
// 	[key: string]: string
// }

function IconPage() {
	// const { name } = useParams() as Keys

	return (
		<DocumentTitle title="Feathericons">
			<div className="xl:pb-64">
				<Header />
				<SearchApp>
					<IconInfo />
				</SearchApp>
			</div>
		</DocumentTitle>
	)
}

export default function Router() {
	return (
		<Switch>
			<Route path={["/", "/404"]} exact>
				<Homepage />
			</Route>
			<Route path="/:name">
				<IconPage />
			</Route>
		</Switch>
	)
}
