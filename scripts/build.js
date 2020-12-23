const { build } = require("esbuild")
const { checkAsync } = require("./utils")
const mdxPlugin = require("./plugins/mdx")

;(async () => {
	build({
		bundle: true,
		define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
		entryPoints: ["src/index.tsx"],
		minify: process.env.NODE_ENV === "production",
		outfile: "build/script.js",
		plugins: [mdxPlugin],
	}).catch(err => {
		if (err) {
			throw err
		}
	})
})()
