var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var mongoose = require('mongoose');
var config = require('../config/main');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
// mongoose.connect(config.database);
// var db = mongoose.connection;

// var db = mongojs('mongodb://admin:admin123@ds139959.mlab.com:39959/driverlesscar', ['admin']);
// db.on('ready', function() {
//     console.log('database connected');
// });
router.get('/blog/login', function(req, res) {
    res.render('index.html');
});

router.post('/authenticate', function(req, res) {
    console.log(req.params);
    console.log(req.body.username);
    // find the user
    User.findOne({
        username: req.body.username
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, config.secret, {
                    expiresIn: 1440 // expires in 24 hours
                });
                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }

        }

    });
});
router.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});


router.get('/users', function(req, res) {
    User.find({}, function(err, users) {
        res.json(users);
    })
});

module.exports = router;


// router.get('/blog/login', function(req, res, next) {
//     //res.send('login page');
//      db.admin.find(function(err, admin) {
//         if (err) {
//             res.send(err);
//         }
//         res.json(admin);
//     });
// });