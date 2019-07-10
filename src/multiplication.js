function * multiplication (...originalArrays) {
	const sources = originalArrays
		.map(array => array.slice())
		.filter(array => array.length)

	if (sources.length === 0) {
		return yield []
	}

	const indexes = Array(sources.length).fill(0)

	while (true) {
		yield indexes.map((e, i) => sources[i][e])

		if (incr()) {
			return
		}
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