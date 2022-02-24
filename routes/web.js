module.exports = app => {
    var router = require("express").Router();
    const controller = require("../controllers/web/controler");
    router.get('/', controller.getIndex);

    router.get('/nguyenquangdat', function(req, res) {
        res.send('hello nguyen quang dat');
    })
    router.get('/nguyenquangdat/*', function(req, res) {
        res.send('hello nguyen quang dat *');
    })
    
    router.get('/nqdat/:age([0-9]{1,2})/:gender', function(req, res) {
        res.send(req.params);
    });

    router.post('/login', (req, res) => {
        console.log(req.baseUrl);
       console.log(req.hostname);
       console.log(req.ip);
       console.log(req.url);
       console.log(req.body);
    //    req.params
    //    req.query
    //    req.body
        res.send('ok');
    });

    router.get('/response', (req, res) => {
        // res.send('ok');
        // res.json({
        //     name: "Nguyen quang dat"
        // });
        // res.status(200);
        // res.redirect('/');
        // res.render('');
    });

    app.use( router);
}