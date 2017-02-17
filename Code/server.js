//we are going to have two files in the routes folder
var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

var index = require('./routes/index');
var product = require('./routes/product');
var aboutus = require('./routes/aboutus');
var mission = require('./routes/mission');
var team = require('./routes/team');
var technology = require('./routes/technology');
var contactus = require('./routes/contactus');

//now we create our main app variable
var app = express();

// Define the port to run on
app.set('port', 3000);

// Add middleware to console log every request
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/fonts', express.static(__dirname + '/fonts'));

//now we setup the view engine
//we begin by letting our system know what folder we want to use for our views
//now we need to specify the engine
app.set('view engine', 'ejs');
// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'views')));

//we also want to render files with a html extension
app.engine('html', require('ejs').renderFile);

//we need a static folder to hold all the Angular material
app.use(express.static(path.join(__dirname, 'client')));

//this section sets the Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//now we create our routes by associating paths with route files defined abouve
app.use('/', index);
app.use('/', product);
app.use('/', aboutus);
app.use('/', mission);
app.use('/', team);
app.use('/', technology);
app.use('/', contactus);

app.get('/*', function(req, res) {
    res.render('404');
})

//the listen function takes a call back function
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});