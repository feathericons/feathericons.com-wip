import Document from "./document"
import fs from "fs/promises"
import React from "react"
import ReactDOMServer from "react-dom/server"
import routes from "../routes"
import { exec } from "child_process"
import { StaticRouter as Router } from "react-router-dom"
import type { Routes } from "./types"

// Prerenders HTML routes.
async function prerenderHTML(routes: Routes) {
	// NOTE: `/404` is client-side rendered.
	const moddedRoutes: typeof routes = {
		...routes,
		"/404": null,
	}
	const ps = []
	for (const key in moddedRoutes) {
		const p = new Promise(async () => {
			const __html = `<!DOCTYPE html>${ReactDOMServer.renderToString(
				<Router location={key}>
					<Document SEO={moddedRoutes[key]?.SEO} />
				</Router>,
			)}`
			const path = `build/${key === "/" ? "index" : key}.html`
			await fs.writeFile(path, __html)
		})
		ps.push(p)
	}
	await Promise.all(ps)
}

;(async () => {
	await exec("mkdir build")
	await exec("ls public && cp -r public build")
	await prerenderHTML(routes)
})()
