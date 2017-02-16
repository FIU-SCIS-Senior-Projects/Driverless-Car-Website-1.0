var express = require('express');
var router = express.Router();


//set routers

router.get('/api/technology', function(req,res,next){
    res.send('This is the technology page');
});

module.exports = router;
