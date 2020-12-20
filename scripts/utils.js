module.exports = {
	check(fn) {
		try {
			const ret = fn()
			return [ret, null]
		} catch (err) {
			return [null, err]
		}
	},
	async checkAsync(promise) {
		try {
			const ret = await promise
			return [ret, null]
		} catch (err) {
			return [null, err]
		}
	},
}
