//==========================================

//transporter object
var nodemailer = require('nodemailer');

var express = require('express');
var router = express.Router();


//set routers

router.get('/contactus', function(req, res, next) {
    res.render('index.html');
});

router.post('contactus/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'driverlesscarinfo@gmail.com',
            pass: 'driverless'
        }
    });
    var data = req.body;
    var mailOptions = {
        from: data.name + ' &lt;' + data.email + '&gt;', //sender address
        to: 'driverlesscarinfo@gmail.com',
        Subject: data.subject,
        text: data.message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            // res.redirect('/');
        } else {
            console.log("Message Sent:" + info.response);
            // res.redirect('/');
        }
        res.json(mailoptions);
    });

});



module.exports = router;