import React from "react"
import { DocumentTitle } from "./lib"
import { Route, Switch } from "react-router-dom"

function Home() {
	return <div>Hello, world!</div>
}

export default function App() {
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
