var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Express-contact' });
});

router.post('/contact/send', function (req, res) {
   
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'keyur13111992@gmail.com',
            pass: 'Keyur@.13111992'
        }
        
    });

    var mailOption = {
        from: 'Keyur Patel <keyur13111992@gmail.com>',
        to: 'keyur1363@gmail.com',
        subject: 'website check',
        text: 's ds jhfdsfsascsakjsaacksacsajkcnsakjcnsajkc...',
        html: '<p>cdvhdifvvidfvfdvnfdvfndvnddff</p><ul><li>' + req.body.name + '</li><li>' + req.body.email+ '</li><li>' + req.body.message + '</li></ul>'
    }
    transporter.sendMail(mailOption, function (error, info) {
        console.log(info);
        if (error) {
            console.log(error);
            res.redirect('/');
        }else{        
            consol.log('Message Sent');
            res.redirect('/');
        }
    });
    res.redirect('/');
});

module.exports = router;

