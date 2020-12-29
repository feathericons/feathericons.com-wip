const { build } = require("esbuild")
const chokidar = require("chokidar")
const express = require("express")
const fs = require("fs")
const mdxPlugin = require("./plugins/mdx")
const path = require("path")
const sass = require("sass")

const __DEV__ = process.env.NODE_ENV !== "production"
const __PORT__ = +process.env.PORT || 8000

function buildSass() {
	const files = fs.readdirSync("src/stylesheets").filter(each => each.endsWith(".scss"))
	for (const each of files) {
		const basename = path.parse(each).name
		const res = sass.render(
			{
				file: `src/stylesheets/${basename}.scss`,
				includePaths: ["node_modules"],
				outFile: `build/stylesheets/${basename}.css`,
				outputStyle: __DEV__ ? "expanded" : "compressed",
			},
			(_, res) => {
				const css = res.css.toString()
				fs.writeFileSync(`build/stylesheets/${basename}.css`, css)
				console.log(`✅ src/stylesheets/${basename}.scss -> build/stylesheets/${basename}.css`)
			},
		)
	}
}

;(async () => {
	const esbuild = await build({
		bundle: true,
		define: {
			__DEV__: JSON.stringify(__DEV__),
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
		},
		entryPoints: ["src/index.tsx"],
		incremental: __DEV__,
		minify: !__DEV__,
		outfile: "build/bundle.js",
		plugins: [mdxPlugin],
	})

	const tsWatcher = chokidar.watch("src/**/*.{ts,tsx}", { interval: 0 })
	tsWatcher.on("ready", esbuild.rebuild)
	tsWatcher.on("change", esbuild.rebuild)

	const scssWatcher = chokidar.watch("src/**/*.{css,scss}", { interval: 0 })
	scssWatcher.on("ready", buildSass)
	scssWatcher.on("change", buildSass)

	const app = express()
	app.use(express.static("build", { extensions: ["html"] }))
	app.get("*", (_, res) => {
		res.sendfile(path.resolve("build", "index.html"))
	})
	console.log(`✅ listening on port ${__PORT__}; open http://localhost:${__PORT__}`)
	app.listen(__PORT__)
})()
