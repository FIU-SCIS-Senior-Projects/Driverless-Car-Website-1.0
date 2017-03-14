var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');

var db = ('mongodb://admin:admin123@ds139959.mlab.com:39959/driverlesscar', ['admin']);

router.get('/blog/login', function(req, res, next) {
    res.send('login page');
    // db.admin.finds(function(err, admin) {
    //     if (err) {
    //         res.send();
    //     }
    //     res.json(admin);
    // })
})

module.exports = router;