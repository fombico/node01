var app = require('express')(),
	port = process.env.PORT || 8080;

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

app.listen(port);