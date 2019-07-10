import P from '../src/P'
import chai from "chai"

chai.should()

describe('Test of `P` function', () => {
	it('P(0) = 1', () => P(0).should.equal(1))
	it('P(4) = 24', () => P(4).should.equal(24))
	it('P(11) = 39916800', () => P(11).should.equal(39916800))
	it('P(20) = 2432902008176640000', () => P(20).should.equal(2432902008176640000))

	it('P(4, 5) = 5', () => P(4, 5).should.equal(5))
	it('P(6, 10) = 5040', () => P(6, 10).should.equal(5040))
})