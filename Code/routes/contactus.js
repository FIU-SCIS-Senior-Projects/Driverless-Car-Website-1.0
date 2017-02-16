var express = require('express');
var router = express.Router();


//set routers

router.get('/api/contactus', function(req,res,next){
    res.send('This is the team contactus');
});

module.exports = router;
