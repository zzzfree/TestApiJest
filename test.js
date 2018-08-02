const http = require('http');

url = 'http://localhost/';

it('works with promises', () => {
	http.get({path: url, port: 3000}, response => {
	  let data = '';
	  response.on('data', _data => (data += _data));
	  response.on('end', () => { 
		console.log(data); 
		return true; 
	  } );
	});
});

 

