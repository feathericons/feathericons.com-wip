import React from "react"
import type { Routes } from "./server/types"

// prettier-ignore
export default {
	"/": {
		metadata: <>
			<link rel="icon" href="favicon.ico" />
			<title>Feathericons</title>
			<meta name="description" content="Feathericons" />
		</>,
	},
	// "/a": {
	// 	metadata: <>
	// 		<link rel="icon" href="favicon.ico" />
	// 		<title>Page A</title>
	// 		<meta name="description" content="Web site created using create-react-app" />
	// 	</>,
	// },
} as Routes
