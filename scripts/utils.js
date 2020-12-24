const fs = require("fs")

module.exports = {
	/**
	 * @cb Callback
	 */
	checkSync(cb) {
		try {
			const ret = cb()
			return [ret, null]
		} catch (err) {
			return [null, err]
		}
	},
	/**
	 * @p Promise
	 */
	async check(p) {
		try {
			const ret = await p
			return [ret, null]
		} catch (err) {
			return [null, err]
		}
	},
	/**
	 * @srcPath Source path
	 * @pattern Regex pattern
	 */
	glob(srcPath, pattern) {
		const matches = fs.readdirSync(srcPath).filter(each => {
			const ok = pattern.test(each)
			return ok
		})
		return matches
	},
	/**
	 * @desc Description
	 * @err Error
	 */
	panic(desc, err) {
		// prettier-ignore
		console.error(desc + ": " + err.toString() + "\n\n" +
			err.stack)
	},
}
