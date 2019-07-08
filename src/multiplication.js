function * multiplication (...originalArrays) {
	if (originalArrays.length === 0) {
		return []
	}

	const sources = originalArrays.map(x => x.slice())
	const indexes = Array(sources.length).fill(0)
	let isLast = false

	while (true) {
		const array = indexes.map((e, i) => sources[i][e])

		if (isLast) {
			return array
		} else {
			yield array
		}

		isLast = incr()
	}

	function incr () {
		for (let i = 0; i < indexes.length; i++) {
			if (indexes[i] + 1 < sources[i].length) {
				indexes[i] += 1

				return false
			} else {
				indexes[i] = 0
			}
		}

		return true
	}
}

export default multiplication