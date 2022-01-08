const express = require('express');

const routerAdmin = express.Router();

routerAdmin.get('/', function(req, res) {
    res.send('hello admin');
})

module.exports.routerAdmin = routerAdmin;