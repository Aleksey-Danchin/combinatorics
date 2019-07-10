import multiplication from '../src/multiplication'
import chai from "chai"

chai.should()

describe('Test of `multiplication` function', () => {
	it('multiplication()', () => {
		Array
			.from(multiplication())
			.should.eql([
				[]
			])
	})

	it('multiplication([])', () => {
		Array
			.from(multiplication([]))
			.should.eql([
				[]
			])
	})

	it('multiplication([true])', () => {
		Array
			.from(multiplication([true]))
			.should.eql([
				[true]
			])
	})

	it("multiplication(['a', 'b', 'c'])", () => {
		Array
			.from(multiplication(['a', 'b', 'c']))
			.should.eql([
				['a'],
				['b'],
				['c']
			])
	})

	it("multiplication(['a', 'b'], ['c', 'd', 'e'], [0, 1], [true])", () => {
		Array
			.from(multiplication(['a', 'b'], ['c', 'd', 'e'], [0, 1], [true]))
			.should.eql([
				['a', 'c', 0, true],
				['b', 'c', 0, true],
				['a', 'd', 0, true],
				['b', 'd', 0, true],
				['a', 'e', 0, true],
				['b', 'e', 0, true],
				['a', 'c', 1, true],
				['b', 'c', 1, true],
				['a', 'd', 1, true],
				['b', 'd', 1, true],
				['a', 'e', 1, true],
				['b', 'e', 1, true]
			])
	})
})