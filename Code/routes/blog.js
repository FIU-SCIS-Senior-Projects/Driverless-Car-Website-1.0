var express = require('express');
var router = express.Router();
var mongojs =  require('mongojs');

//for cloud connection(mlab) with credentials
var db = mongojs('mongodb://admin:admin123@ds139959.mlab.com:39959/driverlesscar',['blogs'])

router.get('/blog', function(req,res,next){
    
    //res.send('TASK API');

    //gets all json file on the collection
    db.blogs.find(function(err,blogs){
        if(err){
            res.send(err);
        }
       // res.json(blogs);
        res.render('index.html');
        
    });
});

router.post('/blog',function(req,res,next){
    var task = req.body;
    if(!task.title|| !(task.body + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else{
        db.task.save(task,function(err,task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }  
 });

//set routers

module.exports = router;