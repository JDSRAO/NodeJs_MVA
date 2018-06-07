'use strict';
var express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log(req);
    res.status(200).json({'test': 132});
});

app.listen('9000');