import React from "react"
import type { Routes } from "./server/types"

export default {
	"/": {
		SEO() {
			return (
				<>
					<link rel="icon" href="favicon.ico" />
					<title>Feathericons</title>
					<meta name="description" content="Feathericons" />
				</>
			)
		},
	},
	"/github": {
		SEO() {
			return (
				<>
					<link rel="icon" href="favicon.ico" />
					<title>Feathericons</title>
					<meta name="description" content="Feathericons" />
				</>
			)
		},
	},
} as Routes
