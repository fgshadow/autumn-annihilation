const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);

// Setup virtual path to access local files
app.use('/static', express.static(path.join(__dirname, 'client', 'src')));

// Setup default views directory for templates
app.set('views', path.join(__dirname, 'client', 'views'));

// Set default template engine
app.set('view engine', 'pug');

// Setup Routes
app.get('/', function(req, res) {
    res.render('home',
    { title: 'Autumn Annihilation' });
});

app.get('/team-registration', function(req, res) {
    res.render('team',
    { title: 'Autumn Annihilation | Team Registration' });
});

app.post('/thank-you', function(req, res) {
    res.render('thanks',
    { title: 'Autumn Annihilation | Thank you!' });
});

// Handle error routes
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

// Start the server on the specified port
app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost' + app.get('port')
    + '; press Ctrl-C to terminate.');
});
