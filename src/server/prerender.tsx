import Document from "./document"
import fs from "fs"
import React from "react"
import ReactDOMServer from "react-dom/server"
import routes from "../routes"
import { check, checkSync } from "./utils"
import { StaticRouter as Router } from "react-router-dom"
import type { Routes } from "./types"

// Asynchronously generates HTML.
async function prerenderHTMLAsync(routes: Routes) {
	const modRoutes: typeof routes = {
		...routes,
		"/404": null,
	}
	const promises = []
	for (const key in modRoutes) {
		const promise = new Promise((_, reject) => {
			const doc = `<!DOCTYPE html>${ReactDOMServer.renderToString(
				<Router location={key}>
					<Document metadata={modRoutes[key]?.metadata} />
				</Router>,
			)}`
			const [, err] = checkSync(() => fs.writeFileSync(`build/${key === "/" ? "index" : key}.html`, doc))
			if (err) {
				reject(err)
			}
		})
		promises.push(promise)
	}
	const [, err] = await check(Promise.all(promises))
	if (err) {
		return err
	}
	return null
}

;(async () => {
	const err = await prerenderHTMLAsync(routes)
	if (err) {
		throw err
	}
})()
