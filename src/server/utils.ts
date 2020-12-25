/**
 * @closure Synchronous closure
 */
export function checkSync(closure: Function) {
	try {
		const ret = closure()
		return [ret, null]
	} catch (err) {
		return [null, err]
	}
}

/**
 * @promise Asynchronous promise
 */
export async function check<T>(promise: Promise<T>) {
	try {
		const ret = await promise
		return [ret, null]
	} catch (err) {
		return [null, err]
	}
}
