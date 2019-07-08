function * byAlphabet (originalArray = [], size = 1) {
	const alphabet = originalArray.slice()

	if (alphabet.length === 0 || size < 1) {
		return []
	}

	const indexes = Array(size).fill(0)
	let isLast = false

	while (true) {
		const array = indexes.map(i => alphabet[i])

		if (isLast) {
			return array
		} else {
			yield array
		}

		isLast = incr()
	}

	function incr () {
		for (let i = indexes.length - 1; i >= 0; i--) {
			if (indexes[i] + 1 < alphabet.length) {
				indexes[i] += 1

				return false
			} else {
				indexes[i] = 0
			}
		}

		return true
	}
}

export default byAlphabet