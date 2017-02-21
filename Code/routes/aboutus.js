var express = require('express');
var router = express.Router();


//set routers

router.get('/aboutus', function(req,res,next){
    res.send('This is the team aboutus');
});

module.exports = router;
