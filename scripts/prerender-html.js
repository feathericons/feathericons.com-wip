const { build } = require("esbuild")
const mdxPlugin = require("./plugins/mdx")

// Bundles `src/server/prerender.tsx` to `src/server/prerender.tmp.tsx`;
// Node is then invoked on the bundled script.
;(() => {
	build({
		bundle: true,
		define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
		entryPoints: ["src/server/prerender.tsx"],
		outfile: "src/server/prerender.tmp.js",
		platform: "node", // Needed for `fs`
		plugins: [mdxPlugin],
	}).catch(err => {
		if (err) {
			throw err
		}
	})
})()
