//==========================================

//transporter object
var nodemailer = require('nodemailer');

var express = require('express');
var router = express.Router();


//set routers

router.get('/contactus', function(req, res, next) {
    res.render('index.html');
});

router.post('/contactus/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'driverlesscarinfo@gmail.com',
            pass: 'driverless'
        }
    });
    var data = req.body;
    name = data.name;
    email = data.email;
    subject = data.subject;
    message = data.message;

    var mailOptions = {
        from: name + ' &lt;' + email + '&gt;',
        to: 'driverlesscarinfo@gmail.com',
        subject: subject,
        text: "name: " + name + "\r\n" + "Email: " + email + "\r\n \r\n " + "Message:" + message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);

        } else {
            console.log("Message Sent:" + info.response);

        }
        transport.close();
        res.json(mailoptions);
    });

    res.render('index.html');


});



module.exports = router;