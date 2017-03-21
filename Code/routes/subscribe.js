var express = require('express');
var router = express.Router();
var mongojs =  require('mongojs');

//for cloud connection(mlab) with credentials
var db = mongojs('mongodb://admin:admin123@ds139959.mlab.com:39959/driverlesscar',['subscribe'])

//save
router.post('/subscribe',function(req,res,next){
    //get it from the form
    var subscribe = req.body;
    if(!subscribe.name|| (subscribe.email + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else{
        db.subscribes.save(subscribe,function(err,subscribe){
            if(err){
                res.send(err);
            }
            res.json(subscribe);
        });
    }  
 });