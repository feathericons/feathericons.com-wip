const { build } = require("esbuild")
const chokidar = require("chokidar")
const express = require("express")
const fs = require("fs")
const mdxPlugin = require("./plugins/mdx")
const path = require("path")
const sass = require("sass")

const port = +process.env.PORT || 8000

function buildSass() {
	const res = sass.renderSync({
		file: "src/stylesheets/index.scss",
		includePaths: ["node_modules"],
		outFile: "build/stylesheets/style.css",
	})
	const css = res.css.toString()
	fs.writeFileSync("build/stylesheets/style.css", css)
}

;(async () => {
	const esbuild = await build({
		bundle: true,
		define: {
			__DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
		},
		entryPoints: ["src/index.tsx"],
		incremental: true,
		outfile: "build/script.js",
		plugins: [mdxPlugin],
	}).catch(err => {
		if (err) {
			throw err
		}
	})

	const tsWatcher = chokidar.watch("src/**/*.{ts,tsx}", { interval: 0 })
	tsWatcher.on("ready", esbuild.rebuild)
	tsWatcher.on("change", esbuild.rebuild)

	const scssWatcher = chokidar.watch("src/**/*.{css,scss}", { interval: 0 })
	scssWatcher.on("ready", buildSass)
	scssWatcher.on("change", buildSass)

	const app = express()
	app.use(express.static("build", { extensions: ["html"] }))
	app.get("*", (req, res) => {
		res.sendFile(path.resolve("build", "index.html"))
	})

	console.log(`serving on port ${port}; http://localhost:${port}`)
	app.listen(port)
})()
