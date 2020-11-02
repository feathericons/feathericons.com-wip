// https://codesandbox.io/s/github/whoisryosuke/next-mdx-boilerplate/tree/typescript?file=/next.config.js
const withMDX = require("@next/mdx")({ extension: /\.(md|mdx)$/ })

module.exports = withMDX({
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
})
