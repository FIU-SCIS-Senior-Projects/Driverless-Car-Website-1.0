var express = require('express');
var router = express.Router();
var mongojs =  require('mongojs');

//for cloud connection(mlab) with credentials
var db = mongojs('mongodb://admin:admin123@ds139959.mlab.com:39959/driverlesscar',['blogs'])

// //get all blogs
// router.get('blog', function(req,res,next){
//     //gets all json file on the collection
//     res.render('index.html');
// });

//save blog
router.post('/blog', function(req, res, next){
    var blog = req.body;
    console.log(blog.title);
    if(!blog.title || !(blog.content + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.blogs.save(blog, function(err, blog){
            if(err){
                res.send(err);
            }
            res.json(blog);
        });
    }
});

module.exports = router;