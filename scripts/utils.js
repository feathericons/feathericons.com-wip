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
	 * @desc Description
	 * @err Error
	 */
	panic(desc, err) {
		// prettier-ignore
		console.error(desc + ": " + err.toString() + "\n\n" +
			err.stack)
	},
}
