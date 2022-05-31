const express = require('express');
// Get the strings
const { strings } = require('./strings');
// Create the app
const app = express();
// Set the port
const port = process.env.PORT || 3000;
// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', './app');
// Add a public folder
app.use(express.static('app/public'));

// Add the routes
app.get('/', (req, res) => {
	return res.render('index', {
		data: strings
	});
});

// Add the 404 route
app.use((_, res) => {
	return res.status(404).render('err404');
});

// Start the server
app.listen(port, () => {
	console.log(`Listening on port ${port}!`);
});