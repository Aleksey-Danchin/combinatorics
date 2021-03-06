function P (n, m = null) {
	n = Math.max(0, parseInt(n))

	if (m === null) {
		switch (n) {
			case 0: return 1
			case 1: return 1
			case 2: return 2
			case 3: return 6
			case 4: return 24
			case 5: return 120
			case 6: return 720
			case 7: return 5040
			case 8: return 40320
			case 9: return 362880
			case 10: return 3628800
			case 11: return 39916800
			case 12: return 479001600
			case 13: return 6227020800
			case 14: return 87178291200
			case 15: return 1307674368000
			case 16: return 20922789888000
			case 17: return 355687428096000
			case 18: return 6402373705728000
			case 19: return 121645100408832000
			case 20: return 2432902008176640000
			case 21: return 51090942171709440000
			case 22: return 1124000727777607680000
		}

		return n * P(n - 1)
	}

	m = Math.max(0, parseInt(m))

	if (m > n) {
		const d = m
		m = n
		n = d
	}

	if (n < 23 && m < 23) {
		return P(n) / P(m)
	}

	let r = 1

	for (let i = m + 1; i <= n; i++) {
		r *= i
	}

	return r
}

export default P