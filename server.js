require('dotenv').config();
const express = require('express');
const path = require('path');
const validator = require('validator');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.set('port', process.env.PORT || 3000);

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Setup virtual path to access local files
app.use('/static', express.static(path.join(__dirname, 'client', 'src')));

// Setup virtual path to access distribution files
app.use('/dist', express.static(path.join(__dirname, 'dist')));
// Setup default views directory for templates

app.set('views', path.join(__dirname, 'server', 'views'));

// Set default template engine
app.set('view engine', 'pug');


// Setup Routes
app.get('/', function(req, res) {
    res.render('home',
    { title: 'Autumn Annihilation' });
});

app.get('/registration', function(req, res) {
    res.render('registration',
    { title: 'Autumn Annihilation | Registration' });
});

app.get('/teams', function(req, res) {
    res.render('teams',
    { title: 'Autumn Annihilation | Team Rosters' });
});

app.post('/thank-you', urlencodedParser, function(req, res) {
    const teamName = validator.ltrim(req.body.teamName);
    const top = validator.ltrim(req.body.topName);
    const jungle = validator.ltrim(req.body.jungleName);
    const mid = validator.ltrim(req.body.midName);
    const adc = validator.ltrim(req.body.adcName);
    const support = validator.ltrim(req.body.supportName);

    console.log(req.body);

    const msg = {
        to:         process.env.EMAIL,
        from:       'info@lolgain.com',
        subject:    'Registration for team ' + teamName + '.',
        html:       '<h2 style="color: red;">Team ' + teamName + '</h2><hr/>' +
                    '<strong>Top: </strong>' + top + '<br/>' +
                    '<strong>Jungle: </strong>' + jungle + '<br/>' +
                    '<strong>Mid: </strong>' + mid + '<br/>' +
                    '<strong>Adc: </strong>' + adc + '<br/>' +
                    '<strong>Support: </strong>' + support + '<br/>'
     };

    if (!teamName) {
        console.log('team name is empty');
    }
    else if (!validator.isLength(teamName, { min: 3, max: 16 })) {
        console.log('team name must be between 3 and 16 characters');
    }
    else if (!top) {
        console.log('top name is empty');
    }
    else if (!validator.isLength(top, { min: 3, max: 16 })) {
        console.log('top name must be between 3 and 16 characters');
    }
    else if (!jungle) {
        console.log('jungle name is empty');
    }
    else if (!validator.isLength(jungle, { min: 3, max: 16 })) {
        console.log('jungle name must be between 3 and 16 characters');
    }
    else if (!mid) {
        console.log('mid name is empty');
    }
    else if (!validator.isLength(mid, { min: 3, max: 16 })) {
        console.log('mid name must be between 3 and 16 characters');
    }
    else if (!adc) {
        console.log('adc name is empty');
    }
    else if (!validator.isLength(adc, { min: 3, max: 16 })) {
        console.log('adc name must be between 3 and 16 characters');
    }
    else if (!support) {
        console.log('support name is empty');
    }
    else if (!validator.isLength(support, { min: 3, max: 16 })) {
        console.log('support name must be between 3 and 16 characters');
    }
    else if(req.body.sub === 'yes'){
        if ((!validator.ltrim(req.body.sub1Name)) && (!validator.ltrim(req.body.sub2Name))) {
            console.log('please enter a sub name.');
        }
        else if ((validator.isLength(req.body.sub1Name, { min: 3, max: 16 })) ||
                 (validator.isLength(req.body.sub2Name, { min: 3, max: 16 }))) {
                    const msg = {
                        to:         process.env.EMAIL,
                        from:       'info@lolgain.com',
                        subject:    'Registration for team ' + teamName + '.',
                        html:       '<h1 style="color: #fff; background-color: red; text-align: center; padding: 15px 0px;">Team ' + teamName + '</h1><br/>' +
                                    '<strong>Top: </strong>' + top + '<br/>' +
                                    '<strong>Jungle: </strong>' + jungle + '<br/>' +
                                    '<strong>Mid: </strong>' + mid + '<br/>' +
                                    '<strong>Adc: </strong>' + adc + '<br/>' +
                                    '<strong>Support: </strong>' + support + '<br/>' +
                                    '<strong>1st Sub: </strong>' + req.body.sub1Name + '<br/>' +
                                    '<strong>2nd Sub: </strong>' + req.body.sub2Name + '<br/>'
                     };
                    console.log('submitting sub');
                    res.render('thanks',
                    { title: 'Autumn Annihilation | Thank You!' });
                    sgMail.send(msg);
        }
        else {
            console.log('sub name must be between 3 and 16 characters');
        }
    }
    else {
        console.log('submitting normal');
        res.render('thanks',
        { title: 'Autumn Annihilation | Thank You!' });

        sgMail.send(msg);
    }
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
    console.log('Express started on http://localhost: ' + app.get('port')
    + '; press Ctrl-C to terminate.');
});
