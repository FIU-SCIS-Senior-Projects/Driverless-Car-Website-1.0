require('rootpath')();
var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');

var mongojs = require('mongojs');
var morgan = require('morgan');


var index = require('./routes/index');
var product = require('./routes/product');
var aboutus = require('./routes/aboutus');
var technology = require('./routes/technology');
var contactus = require('./routes/contactus');
var blog = require('./routes/blog');
var newblog = require('./routes/newblog');
var subscription = require('./routes/subscription');
//var favicon = require('serve-favicon');
var admin = require('./routes/admin');

//now we create our main
var app = express();

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
app.use(morgan('dev'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// Add middleware to console log every request
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(expressJwt({
    secret: config.secret,
    credentialsRequired: false,
    getToken: function fromHeaderOrQuerystring(req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}).unless({ path: ['/api/authenticate'] }));


//now we create our routes by associating paths with route files defined abouve
app.use('/', index);
app.use('/', product);
app.use('/', aboutus);
app.use('/', technology);
app.use('/', contactus);
app.use('/', blog);
app.use('/',subscription);
app.use('/', newblog);
app.use('/api', admin);


//now we listen to run our server with a port variable
var port = 4000;


//the listen function takes a call back function
app.listen(port, function() {
    console.log('Server started on port: ' + port);
});