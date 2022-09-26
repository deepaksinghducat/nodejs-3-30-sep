const http = require('http');

const express = require('express');
var bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views' , 'views');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/admin',adminRoutes);
app.use('/',shopRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000,() => {
	console.log('server is listening on port 3000');
})
