import App from "../App"
import React from "react"

// {/* <script dangerouslySetInnerHTML={{ __html: "// https://stackoverflow.com/a/42969608" }}></script> */}
function Scripts() {
	return (
		<>
			<script src="https://unpkg.com/@zaydek/duomo@0.7.9/dist/browser/index.js"></script>
			<script
				dangerouslySetInnerHTML={{ __html: `window.Duomo.init(${JSON.stringify(process.env.NODE_ENV)})` }}
			></script>
		</>
	)
}

interface DocumentProps {
	metadata?: React.ReactNode
}

export default function Document({ metadata }: DocumentProps) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{metadata}
				<link rel="stylesheet" href="/stylesheets/duomo.css" />
				<link rel="stylesheet" href="/stylesheets/app.css" />
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
