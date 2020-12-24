const { check, checkSync, glob, panic } = require("./utils")
const fs = require("fs/promises")
const path = require("path")
const prettier = require("prettier")
const sass = require("sass")

// https://sass-lang.com/documentation/js-api#fiber
const Fiber = require("fibers")

async function buildSass(inPath, outPath) {
	const [buff, readErr] = await check(fs.readFile(inPath))
	if (readErr) {
		throw new Error("fs.readFileSync: " + readErr.toString())
	}
	const [css, sassErr] = await check(
		new Promise((resolve, reject) => {
			sass.render(
				{
					data: buff.toString(),
					fiber: Fiber, // https://sass-lang.com/documentation/js-api#fiber
					includePaths: ["node_modules"],
					outputStyle: "compressed",
				},
				(err, res) => {
					if (err) {
						reject(err)
					}
					resolve(res.css.toString())
				},
			)
		}),
	)
	if (sassErr) {
		throw new Error("sass.render: " + sassErr.toString())
	}
	const outDir = path.parse(outPath).dir
	const [, mkdirErr] = await check(fs.mkdir(outDir, { recursive: true }))
	if (mkdirErr) {
		throw new Error("fs.mkdir: " + mkdirErr.toString())
	}
	// NOTE: `prettier.format` is synchronous.
	const [fmt, fmtErr] = checkSync(() => prettier.format(css, { parser: "css" }))
	if (fmtErr) {
		throw new Error("prettier.format: " + fmtErr.toString())
	}
	const [, writeErr] = await check(fs.writeFile(outPath, fmt))
	if (writeErr) {
		throw new Error("fs.writeFile: " + writeErr.toString())
	}
	return null
}

// Builds `src/stylesheets/*.scss` to `build/stylesheets/*.css`;
;(async () => {
	const [paths, errReaddir] = await check(fs.readdir("src/stylesheets"))
	if (errReaddir) {
		panic("fs.readdir", errReaddir)
	}
	const matches = paths.filter(each => /(?<!TODO)\.sc?ss$/.test(each))
	const ps = []
	for (const each of matches) {
		const [inPath, outPath] = [`src/stylesheets/${each}`, `build/stylesheets/${path.parse(each).name}.css`]
		ps.push(
			new Promise(async () => {
				await buildSass(inPath, outPath)
				console.log(`✅ ${inPath} -> ${outPath}`)
			}),
		)
	}
	const [_, err] = await check(Promise.all(ps))
	if (err) {
		panic("Promise.all", err)
	}
})()
