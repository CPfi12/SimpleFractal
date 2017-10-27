var chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest-as-promised'); 
const app = require('../app.js')


describe('Server tests', () => {
	
	describe('Tests user with id of 940', ()=>{
		let agent;
	    beforeEach('Set up for testing', ()=>{
		   agent = supertest(app);
	    })
		it('Tests if res.body is array', ()=>{
			return agent.get('/percentiles/940')
				.expect(200)
				.then(res=>{
					expect(res.body).to.be.an('array');
					expect(res.body[0]).to.be.a('string');
				})
		})
		it('Tests if first two indices hold strings', ()=>{
			return agent.get('/percentiles/940')
				.expect(200)
				.then(res=>{
					expect(res.body[0]).to.be.a('string');
					expect(res.body[1]).to.be.a('string');
				})
		})
		it('Tests if last index hold an object', ()=>{
			return agent.get('/percentiles/940')
				.expect(200)
				.then(res=>{
					expect(res.body[2]).to.be.an('object');
				})
		})
		it('Tests values at indices', ()=>{
			return agent.get('/percentiles/940')
				.expect(200)
				.then(res=>{
					expect(res.body[0]).to.be.equal('100.00');
					expect(res.body[1]).to.be.equal('100.00');
				})
		})
		
	})

})