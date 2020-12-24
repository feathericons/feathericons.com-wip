const { build } = require("esbuild")
const mdxPlugin = require("./plugins/mdx")

// Bundles `src/index.tsx` to `build/script.js`.
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
