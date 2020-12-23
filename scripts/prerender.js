const { build } = require("esbuild")
const mdxPlugin = require("./plugins/mdx")

;(() => {
	build({
		bundle: true,
		define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
		entryPoints: ["src/server/prerender.tsx"],
		outfile: "src/server/prerender.js",
		platform: "node", // Needed for `fs`
		plugins: [mdxPlugin],
	}).catch(err => {
		if (err) {
			throw err
		}
	})
})()
