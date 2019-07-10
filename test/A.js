import A from '../src/A'
import chai from "chai"

chai.should()

describe('Test of `A` function', () => {
	it('A(0, 0) = 1', () => A(0, 0).should.equal(1))
	it('A(3, 6) = 120', () => A(3, 6).should.equal(120))
	it('A(5, 10) = 30240', () => A(5, 10).should.equal(30240))
})