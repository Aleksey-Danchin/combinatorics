function A (k, n) {
	if (n === k) {
		return 1
	}

	if (k > n) {
		const d = k
		k = n
		n = d
	}

	let result = 1

	for (let i = k + 1; i <= n; i++) {
		result *= i
	}

	return result
}

export default A