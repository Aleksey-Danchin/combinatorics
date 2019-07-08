function * permutation (originalArray = []) {
	const array = originalArray.slice()

	if (array.length === 0) {
		return
	}

	if (array.length === 1) {
		return array
	}

	yield * itter([], array)

	function * itter (base, sub) {
		if (sub.length === 0) {
			yield base
		}

		else for (let index = 0; index < sub.length; index++) {
			const subCopy = sub.slice()
			subCopy.splice(index, 1)

			yield * itter(
				[...base, sub[index]],
				subCopy
			)
		}		
	}
}

export default permutation