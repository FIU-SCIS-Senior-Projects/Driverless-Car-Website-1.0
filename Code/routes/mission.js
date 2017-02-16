var express = require('express');
var router = express.Router();


//set routers

router.get('/api/mission', function(req,res,next){
    res.send('This is the mission page');
});

module.exports = router;
