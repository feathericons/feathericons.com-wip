import App from "../App"
import React from "react"

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
			</head>
			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<div id="root">
					<App />
				</div>
				<script src="/script.js"></script>
				<script>{/* Dark mode */}</script>
			</body>
		</html>
	)
}
