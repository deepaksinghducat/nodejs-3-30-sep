const http = require('http');

const express = require('express');
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


// const server = http.createServer((req,res) => {

	
// 	if(req.url === '/post' && req.method === 'POST') { 

// 		res.write('fdsafsadf');

// 		const body = []

// 		req.on('data', function (data) {
// 			body.push(data)
// 		})

// 		req.on('end', function () {
// 		    console.log(body.toString());
// 		})

// 		res.end();
// 	}

// 	if(req.url === '/') {
// 		res.write(`
// 		<html>
// 		    <head>
// 		       <title>First App</title>
// 		    </head>
// 		    <body>
// 		        <form action='/post' method='POST'>
// 					<input type='text' name='name' />
// 					<input type='submit' value='submit' />
// 				</form>
// 		    </body>
// 		</html>`)

// 		res.end();
// 	}

// });

// server.listen(3000,() => {
// 	console.log('server is listening on port 3000');
// },)

const isAuthenticated = 1;

app.use('/', (req,res,next) => {
    if(isAuthenticated) {
		next();
	}else{
		res.send('not authenticated');
	}
})

app.post('/send-data', (req, res, next) => {
	res.send(req.body)
});

app.get('/fdsafadsfdsaf', (req,res) => {
	res.send(req.method);
})

app.listen(3000,() => {
	console.log('server is listening on port 3000');
})
