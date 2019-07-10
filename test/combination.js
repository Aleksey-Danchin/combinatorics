import combination from '../src/combination'
import chai from "chai"

chai.should()

describe('Test of `combination` function', () => {
	it('combination([], 1)', () => {
		Array
			.from(combination([], 1))
			.should.eql([
				[]
			])
	})

	it('combination([], 100)', () => {
		Array
			.from(combination([], 100))
			.should.eql([
				[]
			])
	})

	it('combination([1, 2, 3], 1)', () => {
		Array
			.from(combination([1, 2, 3], 1))
			.should.eql([
				[1],
				[2],
				[3]
			])
	})

	it('combination([1, 2, 3], 2)', () => {
		Array
			.from(combination([1, 2, 3], 2))
			.should.eql([
				[1, 2],
				[1, 3],
				[2, 3]
			])
	})

	it('combination([1, 2, 3], 3)', () => {
		Array
			.from(combination([1, 2, 3], 3))
			.should.eql([
				[1, 2, 3]
			])
	})

	it('combination([1, 2, 3], 100)', () => {
		Array
			.from(combination([1, 2, 3], 100))
			.should.eql([
				[1, 2, 3]
			])
	})
})