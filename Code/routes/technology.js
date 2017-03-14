var express = require('express');
var router = express.Router();


//set routers

router.get('/technology', function(req, res, next) {
    res.render('index.html');
});

module.exports = router;