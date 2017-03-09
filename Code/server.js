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
var blog = require('./routes/blog');

//now we create our main
var app = express();

// Add middleware to console log every request
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

//now we setup the view engine
//we begin by letting our system know what folder we want to use for our views
app.set('views', path.join(__dirname, 'views'));
//now we need to specify the engine
app.set('view engine', 'ejs');

//we also want to render files with a html extension
app.engine('html', require('ejs').renderFile);

//we need a static folder to hold all the Angular material
app.use(express.static(path.join(__dirname, 'api')));

//this section sets the Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//now we create our routes by associating paths with route files defined abouve
app.use('/', index);
app.use('/', product);
app.use('/', aboutus);
app.use('/', mission);
app.use('/', team);
app.use('/', technology);
app.use('/', contactus);
app.use('/', blog);

// app.get('/*', function(req, res) {
//     res.render('404');
// })

//now we listen to run our server with a port variable
var port = 4000;


//the listen function takes a call back function
app.listen(port, function() {
    console.log('Server started on port: ' + port);
});