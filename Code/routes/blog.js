var express = require('express');
var router = express.Router();


//set routers

router.get('/blog', function(req, res, next) {
    res.send('This is the blog page');
});

module.exports = router;