var express = require('express');
var router = express.Router();


//set routers

router.get('/product', function(req,res,next){
    res.send('This is the team product');
});

module.exports = router;
