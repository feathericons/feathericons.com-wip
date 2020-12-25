const { build } = require("esbuild")
const mdxPlugin = require("./plugins/mdx")

// Bundles `src/server/prerender.tsx` to `src/server/prerender.tmp.tsx`;
// Node is then invoked on the bundled script.
// Go cannot be reasonably used here because of MDX.
;(() => {
	build({
		bundle: true,
		define: {
			__DEV__: JSON.stringify(process.env.NODE_ENV || "development"),
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
		},
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
