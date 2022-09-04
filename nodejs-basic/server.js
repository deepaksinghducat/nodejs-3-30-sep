const http = require('http');

const server = http.createServer((req,res) => {

	
	if(req.url === '/post' && req.method === 'POST') { 
		console.log('fdsafsadf');

		res.write('fdsafsadf');

		res.end();
	}

	if(req.url === '/') {
		res.write(`
		<html>
		    <head>
		       <title>First App</title>
		    </head>
		    <body>
		        <form action='/post' method='POST'>
					<input type='text' name='name' />
					<input type='submit' value='submit' />
				</form>
		    </body>
		</html>`)

		res.end();
	}

});

server.listen(3000,() => {
	console.log('server is listening on port 3000');
},)
