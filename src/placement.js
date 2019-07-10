function * placement (originalArray = [], size = 1) {
	const array = originalArray.slice()

	if (size < 1) {
		return yield []
	}

	size = Math.min(size, array.length)

	yield * itter([], array, size)

	function * itter (sample, bank, count) {
		if (count === 0) {
			yield sample
		}

		else for (let index = 0; index < bank.length; index++) {
			const subBank = bank.slice()
			subBank.splice(index, 1)

			yield * itter(
				[...sample, bank[index]],
				subBank,
				count - 1
			)
		}
	}
}

export default placement