const { build } = require("esbuild")
const { checkAsync } = require("./utils")
const markdownItPlugin = require("./markdown-it-plugin")

;(async () => {
	const [_, err] = await checkAsync(
		build({
			bundle: true,
			define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
			entryPoints: ["src/index.tsx"],
			minify: process.env.NODE_ENV === "production",
			outfile: "build/script.js",
			plugins: [markdownItPlugin],
		}),
	)
	if (err) {
		throw err
	}
})()
