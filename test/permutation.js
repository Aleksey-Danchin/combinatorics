import permutation from '../src/permutation'
import chai from "chai"

chai.should()

describe('Test of `permutation` function', () => {
	it('permutation([])', () => {
		Array
			.from(permutation([]))
			.should.eql([
				[]
			])
	})

	it('permutation([1])', () => {
		Array
			.from(permutation([1]))
			.should.eql([
				[1]
			])
	})

	it('permutation([1, 2])', () => {
		Array
			.from(permutation([1, 2]))
			.should.eql([
				[1, 2],
				[2, 1]
			])
	})

	it('permutation([1, 2, 3, 4, 5])', () => {
		Array
			.from(permutation([1, 2, 3, 4]))
			.should.eql([
				[ 1, 2, 3, 4 ],
				[ 1, 2, 4, 3 ],
				[ 1, 3, 2, 4 ],
				[ 1, 3, 4, 2 ],
				[ 1, 4, 2, 3 ],
				[ 1, 4, 3, 2 ],
				[ 2, 1, 3, 4 ],
				[ 2, 1, 4, 3 ],
				[ 2, 3, 1, 4 ],
				[ 2, 3, 4, 1 ],
				[ 2, 4, 1, 3 ],
				[ 2, 4, 3, 1 ],
				[ 3, 1, 2, 4 ],
				[ 3, 1, 4, 2 ],
				[ 3, 2, 1, 4 ],
				[ 3, 2, 4, 1 ],
				[ 3, 4, 1, 2 ],
				[ 3, 4, 2, 1 ],
				[ 4, 1, 2, 3 ],
				[ 4, 1, 3, 2 ],
				[ 4, 2, 1, 3 ],
				[ 4, 2, 3, 1 ],
				[ 4, 3, 1, 2 ],
				[ 4, 3, 2, 1 ]
			])
	})
})