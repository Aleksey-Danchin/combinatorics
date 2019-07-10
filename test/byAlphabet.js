import byAlphabet from '../src/byAlphabet'
import chai from "chai"

chai.should()

describe('Test of `byAlphabet` function', () => {
	it('byAlphabet([], 1)', () => {
		Array
			.from(byAlphabet([], 1))
			.should.eql([
				[]
			])
	})

	it('byAlphabet([], 100)', () => {
		Array
			.from(byAlphabet([], 100))
			.should.eql([
				[]
			])
	})

	it("byAlphabet(['a'], 1)", () => {
		Array
			.from(byAlphabet(['a'], 1))
			.should.eql([
				['a']
			])
	})

	it("byAlphabet(['a'], 5)", () => {
		Array
			.from(byAlphabet(['a'], 5))
			.should.eql([
				['a', 'a', 'a', 'a', 'a']
			])
	})

	it("byAlphabet(['a', 'b', 'c'], 3)", () => {
		Array
			.from(byAlphabet(['a', 'b', 'c'], 3))
			.should.eql([
				['a', 'a', 'a'],
				['a', 'a', 'b'],
				['a', 'a', 'c'],
				['a', 'b', 'a'],
				['a', 'b', 'b'],
				['a', 'b', 'c'],
				['a', 'c', 'a'],
				['a', 'c', 'b'],
				['a', 'c', 'c'],

				['b', 'a', 'a'],
				['b', 'a', 'b'],
				['b', 'a', 'c'],
				['b', 'b', 'a'],
				['b', 'b', 'b'],
				['b', 'b', 'c'],
				['b', 'c', 'a'],
				['b', 'c', 'b'],
				['b', 'c', 'c'],

				['c', 'a', 'a'],
				['c', 'a', 'b'],
				['c', 'a', 'c'],
				['c', 'b', 'a'],
				['c', 'b', 'b'],
				['c', 'b', 'c'],
				['c', 'c', 'a'],
				['c', 'c', 'b'],
				['c', 'c', 'c'],
			])
	})
})