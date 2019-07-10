import P from './P'

function A (k, n) {
	if (n === k) {
		return 1
	}

	if (k > n) {
		const d = k
		k = n
		n = d
	}

	return P(n) / P(k)
}

export default A