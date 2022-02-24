const express = require('express');
const controller = require('../controllers/web/controler');

const router = express.Router();

router.get('/', controller.getIndex);

router.get('/nguyenquangdat', function(req, res) {
    res.send('hello nguyen quang dat');
})
router.get('/nguyenquangdat/*', function(req, res) {
    res.send('hello nguyen quang dat *');
})

router.get('/nqdat/:age([0-9]{1,2})/:gender', function(req, res) {
    res.send(req.params);
})

router.get('/multi-function', [func1, func2], helloWorld);

function func1(req, res, next) {
    console.log('func1');
    next();
}

function func2(req, res, next) {
    console.log('func2');
    res.send('error');
    // next();
}

function helloWorld(req, res) {
    res.send('helloworld');
}

module.exports.routerWeb = router;