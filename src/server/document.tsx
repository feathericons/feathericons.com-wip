import App from "../App"
import React from "react"

function Stylesheets() {
	return (
		<>
			<link rel="stylesheet" href="/stylesheets/duomo.css" />
			<link rel="stylesheet" href="/stylesheets/app.css" />
			<link rel="stylesheet" href="/stylesheets/prose.css" />
		</>
	)
}

function Scripts() {
	return (
		<>
			<script src="/public/scripts/duomo.js"></script>
			<script dangerouslySetInnerHTML={{ __html: `window.Duomo.init(${JSON.stringify(__DEV__)})` }}></script>
		</>
	)
}

interface DocumentProps {
	SEO?: () => JSX.Element
}

export default function Document({ SEO }: DocumentProps) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{SEO && <SEO />}
				<Stylesheets />
				<Scripts />
			</head>
			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<div id="root">
					<App />
				</div>
				<script src="/script.js"></script>
			</body>
		</html>
	)
}
