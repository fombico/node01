var app = require('express')(),
	port = process.env.PORT || 8080,
	server = require('http').createServer(app),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongooseDemo', {
  useMongoClient: true
});

app.use(morgan('combined')); // logging of requests
app.use(bodyParser.urlencoded({extended: false})); // converts request body to json
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
	var company = process.env.COMPANY || 'World';
	res.send('Hello, ' + company + '!');
});

app.listen(port, (err) => {
	console.log('listening on %s', port);
});