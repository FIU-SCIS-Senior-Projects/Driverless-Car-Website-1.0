var express = require('express');
var router = express.Router();
var mongojs =  require('mongojs');

//for cloud connection(mlab) with credentials
var db = mongojs('mongodb://admin:admin123@ds139959.mlab.com:39959/driverlesscar',['subscribe'])

router.get('/subscription', function(req, res) {
    res.render('index.html');
});

//save
router.post('/subscription',function(req,res,next){
    
    //get it from the form
    var subscribe = req.body;

    console.log("name: " + subscribe.name);
    console.log("email: " + subscribe.email);

    if(!subscribe.name|| !(subscribe.email + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else{
        db.subscribe.save(subscribe,function(err,subscribe){
            if(err){
                res.send(err);
            }
            res.json(subscribe);
        });
    }  
 });
 module.exports = router;