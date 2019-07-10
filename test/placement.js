import placement from '../src/placement'
import chai from "chai"

chai.should()

describe('Test of `placement` function', () => {
	it('placement([], 1)', () => {
		Array
			.from(placement([], 1))
			.should.eql([
				[]
			])
	})

	it('placement([], 100)', () => {
		Array
			.from(placement([], 100))
			.should.eql([
				[]
			])
	})

	it('placement([1, 2, 3], 1)', () => {
		Array
			.from(placement([1, 2, 3], 1))
			.should.eql([
				[1],
				[2],
				[3]
			])
	})

	it('placement([1, 2, 3], 2)', () => {
		Array
			.from(placement([1, 2, 3], 2))
			.should.eql([
				[1, 2],
				[1, 3],
				[2, 1],
				[2, 3],
				[3, 1],
				[3, 2]
			])
	})

	it('placement([1, 2, 3], 3)', () => {
		Array
			.from(placement([1, 2, 3], 3))
			.should.eql([
				[1, 2, 3],
				[1, 3, 2],
				[2, 1, 3],
				[2, 3, 1],
				[3, 1, 2],
				[3, 2, 1]
			])
	})

	it('placement([1, 2, 3], 5)', () => {
		Array
			.from(placement([1, 2, 3], 5))
			.should.eql([
				[1, 2, 3],
				[1, 3, 2],
				[2, 1, 3],
				[2, 3, 1],
				[3, 1, 2],
				[3, 2, 1]
			])
	})
})