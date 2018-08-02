
var request = require('supertest'); 
	
it('test post', () => {
  request('http://localhost:3000/')
	.post('/')
	.send(profile)
	.expect('Content-Type', /json/)
	.expect(200) //Status code
	.end(function(err,res) {
	  if (err) {
		throw err;
	  }
	  console.log("success res==>",res.body);
	  // Should.js fluent syntax applied
	  res.body.status.should.equal(0);
	  userCookie = res.headers['set-cookie']; 
	});
});
