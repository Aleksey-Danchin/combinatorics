import A from './A'
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

	return A(k, n) / P(k)
}

export default C