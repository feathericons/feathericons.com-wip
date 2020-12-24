const { checkSync, glob, panic } = require("./utils")
const fs = require("fs")
const path = require("path")
const prettier = require("prettier")
const sass = require("sass")

function buildSass(inPath, outPath) {
	const [buff, readErr] = checkSync(() => fs.readFileSync(inPath))
	if (readErr) {
		return new Error("fs.readFileSync: " + readErr.toString())
	}
	const [res, sassErr] = checkSync(() =>
		sass.renderSync({
			data: buff.toString(),
			includePaths: ["node_modules"],
			outputStyle: "compressed",
		}),
	)
	if (sassErr) {
		return new Error("sass.renderSync: " + sassErr.toString())
	}
	const [parsed, pathErr] = checkSync(() => path.parse(outPath))
	if (pathErr) {
		return new Error("path.parse: " + pathErr.toString())
	}
	const [, mkdirErr] = checkSync(() => fs.mkdirSync(parsed.dir, { recursive: true }))
	if (mkdirErr) {
		return new Error("fs.mkdirSync: " + mkdirErr.toString())
	}
	const [fmt, fmtErr] = checkSync(() => prettier.format(res.css.toString(), { parser: "css" }))
	if (fmtErr) {
		return new Error("prettier.format: " + fmtErr.toString())
	}
	const [, writeErr] = checkSync(() => fs.writeFileSync(outPath, fmt))
	if (writeErr) {
		return new Error("fs.writeFileSync: " + writeErr.toString())
	}
	return null
}

// Builds `src/stylesheets/*.scss` to `build/stylesheets/*.css`;
;(() => {
	const [matches, errGlob] = checkSync(() => glob("src/stylesheets", /(?<!TODO)\.sc?ss$/))
	if (errGlob) {
		panic("glob", errGlob)
	}
	for (const each of matches) {
		const [inPath, outPath] = [`src/stylesheets/${each}`, `build/stylesheets/${path.parse(each).name}.css`]
		const errSass = buildSass(inPath, outPath)
		if (errSass) {
			panic("buildSass", errSass)
		}
		console.log(`✅ ${inPath} → ${outPath}`)
	}
})()
