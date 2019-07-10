import C from '../src/C'
import chai from "chai"

chai.should()

describe('Test of `C` function', () => {
	it('C(0, 0) = 1', () => C(0, 0).should.equal(1))
	it('C(5, 12) = 792', () => C(5, 12).should.equal(792))
	it('C(7, 3) = 35', () => C(7, 3).should.equal(35))
	it('C(10, 12) = 66', () => C(10, 12).should.equal(66))
})