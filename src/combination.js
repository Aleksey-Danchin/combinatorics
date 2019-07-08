function * combination (originalArray = [], size = 1) {
	const array = originalArray.slice()

	if (size < 1) {
		return []
	}

	if (size >= array.length) {
		return array
	}

	yield * itter([], array)

	function * itter (sample, bank) {
		if (sample.length === size) {
			yield sample
		}

		else for (let index = 0, limit = bank.length + sample.length - size + 1; index < limit; index++) {
			const subBank = bank.slice()
			subBank.splice(index, 1)

			yield * itter(
				[...sample, bank[index]],
				subBank
			)
		}
	}
}

export default combination