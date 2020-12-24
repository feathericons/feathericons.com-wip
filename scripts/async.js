// const fetch = require("node-fetch")
const sass = require("sass")

// async function check(p) {
// 	try {
// 		const ret = await p
// 		return [ret, null]
// 	} catch (err) {
// 		return [null, err]
// 	}
// }
//
// async function a() {
// 	console.log("a start")
// 	await check(fetch("https://google.com"))
// 	console.log("a end")
// }
//
// async function b() {
// 	console.log("b start")
// 	await check(fetch("https://google.com"))
// 	console.log("b end")
// }
//
// ;(async () => {
// 	const ps = []
// 	ps.push(a())
// 	ps.push(b())
// 	Promise.all(ps)
// })()

async function thing() {
	// prettier-ignore
	const res = await new Promise((resolve, reject) => {
		sass.render({
			data: `.hello { content: "Hello, world!"; }`,
		}, (err, res) => {
			if (err) {
				reject(err)
			}
			resolve(res.css.toString())
		})
	})
	console.log(res)
}

;(async () => {
	// const res =
	await thing()
	// console.log(res)
})()

// const promises = []
// for (const key in modRoutes) {
// 	const promise = new Promise((_, reject) => {
// 		const doc = `<!DOCTYPE html>${ReactDOMServer.renderToString(
// 			<Router location={key}>
// 				<Document metadata={modRoutes[key]?.metadata} />
// 			</Router>,
// 		)}`
// 		const [, err] = check(() => fs.writeFileSync(`build/${key === "/" ? "index" : key}.html`, doc))
// 		if (err) {
// 			reject(err)
// 		}
// 	})
// 	promises.push(promise)
// }
// const [, err] = await checkAsync(Promise.all(promises))
// if (err) {
// 	return err
// }
// return null
