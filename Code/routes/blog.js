var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

//for cloud connection(mlab) with credentials
var db = mongojs('mongodb://admin:admin123@ds139959.mlab.com:39959/driverlesscar', ['blogs'])

//get all blogs
router.get('/blog', function(req, res, next) {
    //gets all json file on the collection
    db.blogs.find(function(err, blogs) {
        if (err) {
            res.send(err);
        }
        res.json(blogs);

    });

});

//get single blog
router.get('/blog/:id', function(req, res, next) {
    db.blogs.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(err, blog) {
        if (err) {
            res.send(err);
        }
        res.json(blog);
    });
});

// //Delete blog

// router.delete('/blog/:id',function(req,res,next){
//     db.blogs.remove({_id: mongojs.ObjectId(req.params.id)},function(err,blog){
//         if(err){
//             res.send(err);
//         }
//         res.json(blog);
//     });
// });

// //update blog
// router.put('/blog/:id',function(req,res,next){
//     var blog = req.body;
//     var updBlog = {};

//     if(blog.content){
//         updBlog.content=blog.content;
//     }
//     if(blog.title){
//         updBlog.title=blog.title;
//     }
//     if(!updBlog){
//         res.status(400);
//         res.json({
//             "error": "Bad Data"
//         });
//     }else{
//         db.blogs.update({_id:mongojs.ObjectId(req.params.id)},updBlog,{},function(err,blog){
//             if(err){
//                 res.send(err);
//             }
//             res.json(blog);
//         });
//     }

// });

module.exports = router;