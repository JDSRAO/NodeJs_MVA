'use strict';
let express = require('express');
let event = require('events');

const fs = require('../services/fileService');
const fileService = require('../services/file.module.service.js');

let router = express.Router();
const eventEmitter = new event.EventEmitter();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/fRead', function (req, res) {
    var fileName = './content/sample.txt';
    
    //eventEmitter.emit('LError', 'from index API');
    fs.readFile(fileName).then(function (data) {
        return res.status(500).json({
            'data': data
        });
    }, function(err) {
        return res.status(500).json({
            'data': err
        });
    });
});

router.get('/fWrite', function (req, res) {
    let fileName = 'test.txt';
    let path = './content/'
    let data = 'Hai I am the data';
    console.log(__dirname);
    fileService.writeFile(path, fileName, data).then(function (data) {
        res.status(200).json({
            'data' : data
        });
    }, function (err) {
        res.status(500).json({
            'message': err
        });
    });
});

module.exports = router;
