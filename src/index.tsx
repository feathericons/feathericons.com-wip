import App from "./App"
import React from "react"
import ReactDOM from "react-dom"
import routes from "./routes"
import { BrowserRouter as Router } from "react-router-dom"

if (__DEV__ === "development" || !routes[window.location.pathname]) {
	console.log("[debug] ReactDOM.render")
	ReactDOM.render(
		<Router>
			<App />
		</Router>,
		document.getElementById("root"),
	)
} else {
	console.log("[debug] ReactDOM.hydrate")
	ReactDOM.hydrate(
		<Router>
			<App />
		</Router>,
		document.getElementById("root"),
	)
}
