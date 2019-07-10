import P from './P'

function C (k, n) {
	if (n === k) {
		return 1
	}

	if (k > n) {
		const d = k
		k = n
		n = d
	}

	return n - k > n ? P(k, n) / P(n) : P(n - k, n) / P(k)
}

export default C