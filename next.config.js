// http://geekhmer.github.io/blog/2018/03/29/import-markdown-files-and-serve-its-content-in-next-dot-js
module.exports = {
	webpack: config => {
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader",
		})
		return config
	},
}
