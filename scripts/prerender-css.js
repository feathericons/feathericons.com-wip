const { check } = require("./utils")
const fs = require("fs")
const sass = require("sass")

;(() => {
	const res = sass.renderSync({
		file: "src/style.scss",
		outputStyle: "compressed",
	})
	const [, err] = check(() => fs.writeFileSync("build/style.css", res.css.toString(), "utf8"))
	if (err) {
		throw err
	}
})()
