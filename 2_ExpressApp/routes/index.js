'use strict';
var express = require('express');

var fs = require('../services/fileService');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/fRead', function (req, res) {
    var fileName = '../content/sample.txt';
    fs.readFile(fileName).then(function (data) {
        return res.status(500).json({
            'data': data
        });
    }), function(err) {
        return res.status(500).json({
            'data': err
        });
    };
});

module.exports = router;
