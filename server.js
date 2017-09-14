var app = require('express')(),
	port = process.env.PORT || 8080,
	server = require('http').createServer(app);

app.get('/', (req, res, next) => {
	console.log("request received");
	res.send('Hello, World');
});

app.listen(port, (err) => {
	console.log('listening on %s', port);
});