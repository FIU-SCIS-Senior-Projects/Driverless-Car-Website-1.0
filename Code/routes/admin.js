var config = require('config.json');
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();


// routes
//router.post('/authenticate', authenticate);

var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin123@ds139959.mlab.com:39959/driverlesscar', ['users'])


// router.get('/current', getCurrent);


module.exports = router;

router.post('/authenticate', function(req, res) {

    // find the user
    db.users.findOne({
        username: req.body.username
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.json({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong password.'
                });
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, config.secret, {
                    expiresIn: 10080 // expires in 24 hours
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
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, app.get(config.secret), function(err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate tocken'
                });

            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided'
        });
    }
});


// function getCurrent(req, res) {
//     userService.getById(req.user.sub)
//         .then(function(user) {
//             if (user) {
//                 res.send(user);
//             } else {
//                 res.sendStatus(404);
//             }
//         })
//         .catch(function(err) {
//             res.status(400).send(err);
//         });
// }



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