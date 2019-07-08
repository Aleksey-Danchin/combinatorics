function * placement (originalArray = [], n = 1) {
	const array = originalArray.slice()

	if (n < 1) {
		return []
	}

	if (n === array.length) {
		return array
	}

	yield * itter([], array, n)

	function * itter (sample, bank, n) {
		if (n === 0) {
			yield sample
		}

		else for (let index = 0; index < bank.length; index++) {
			const subBank = bank.slice()
			subBank.splice(index, 1)

			yield * itter(
				[...sample, bank[index]],
				subBank,
				n - 1
			)
		}
	}
}

export default placement