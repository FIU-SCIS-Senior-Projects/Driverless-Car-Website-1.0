//we are going to have two files in the routes folder


var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

var index = require('./routes/index');
//var tasks = require('./routes/tasks');

//now we create our main app variable
var app = express();

// Add middleware to console log every request
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'views')));

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/fonts', express.static(__dirname + '/fonts'));

//now we setup the view engine
//we begin by letting our system know what folder we want to use for our views
//app.set('views', path.join(__dirname, 'views'));
//now we need to specify the engine
app.set('view engine', 'ejs');

//we also want to render files with a html extension
app.engine('html', require('ejs').renderFile);

//we need a static folder to hold all the Angular material
app.use(express.static(path.join(__dirname, 'client')));

//this section sets the Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//now we create our routes by associating paths with route files defined abouve
app.use('/', index);
//app.use('/api', tasks);

//now we listen to run our server with a port variable
var port = 2000;


//the listen function takes a call back function
app.listen(port, function() {
    console.log('Server started on port: ' + port);
});








// //modules=================================================
// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');

// var routes = require('./routes/index');

// var index = require('./routes/index');
// var product = require('./routes/product');
// var aboutus = require('./routes/aboutus');
// var mission = require('./routes/mission');
// var team = require('./routes/team');
// var technology = require('./routes/technology');

// var app = express();

// // Define the port to run on
// //app.set('port', 3000);

// // Add middleware to console log every request
// app.use(function(req, res, next) {
//     console.log(req.method, req.url);
//     next();
// });

// // Set static directory before defining routes
// //app.use(express.static(path.join(__dirname, 'views')));

// app.use('views',path.join(__dirname, 'views'));
// app.set('view engine','ejs');

// app.engine('html', require('ejs').renderFile);

// app.use(express.static(path.join(__dirname,'client')));


// app.use('/node_modules', express.static(__dirname + '/node_modules'));
// app.use('/fonts', express.static(__dirname + '/fonts'));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// //parse application/json
// app.use(bodyParser.json());

// // Add some routing
// app.use('/',index);
// //app.use('/api',product);
// //app.use('/api',aboutus);
// //app.use('/api',mission);
// //app.use('/api',team);
// //app.use('/api',technology);


// var port = 3000;

// // Listen for requests
// app.listen(port, function() {
//    // var port = server.address().port;
//     console.log('Magic happens on port ' + port);
// });