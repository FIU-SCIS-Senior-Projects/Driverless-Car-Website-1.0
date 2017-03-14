var express = require('express');

var router = express.Router();

//require is like import 
var mongojs =  require('mongojs');

//the collection at the end
//for cloud connection(mlab) with credentials
var db = mongojs('mongodb://admin:admin123@ds139959.mlab.com:39959/driverlesscar',['blogs'])

//for localhost connection
//simple usage for a local db w/ no credentials
//var db = mongojs('drivelers-cars-db', ['tasks']);

router.get('/blogs', function(req,res,next){
    
    //res.send('TASK API');

    //gets all json file on the collection
    db.blogs.find(function(err,blogs){
        if(err){
            res.send(err);
        }
        res.json(blogs);
        
    });
});
//     router.get('/blogs/:id', function(req,res,next){
//     db.blogs.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,task){
//         if(err){
//             res.send(err);
//         }
//         res.json(task);
//     });
// });
// /*
//     router.get('/tasks/:id', function(req,res,next){
//         res.send("task ID is set to " + req.params.id);
//     });*/


// router.post('/task',function(req,res,next){
//     var task = req.body;
//     if(!task.title|| !(task.body + '')){
//         res.status(400);
//         res.json({
//             "error": "Bad Data"
//         });
//     }else{
//         db.task.save(task,function(err,task){
//             if(err){
//                 res.send(err);
//             }
//             res.json(task);
//         });
//     }  
//  });

// router.delete('/blogs/:id',function(req,res,next){
//     db.blogs.remove({_id: mongojs.ObjectId(req.params.id)},function(err,task){
//         if(err){
//             res.send(err);
//         }
//         res.json(task);
//     });
// });

// router.put('/blogs/:id',function(req,res,next){
//     var task = req.body;
//     var updTask = {};
//     if(task.body){
//         updTask.body=task.body;
//     }
//     if(task.title){
//         updTask.title=task.title;
//     }
//     if(!updTask){
//         res.status(400);
//         res.json({
//             "error": "Bad Data"
//         });
//     }else{
//         db.blogs.update({_id:mongojs.ObjectId(req.params.id)},updTask,{},function(err,task){
//             if(err){
//                 res.send(task);
//             }
//             res.json(task);
//         });
//     }
   
// });


module.exports =router;