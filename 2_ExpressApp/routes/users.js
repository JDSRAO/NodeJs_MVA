'use strict';
var express = require('express');
var router = express.Router();

var userService = require('../services/userService');

/* GET users listing. */
router.get('/', function (req, res)
{
    userService.getUsers().then(function (result)
    {
        return res.status(200).json({ 'data': result });
    }, function (err)
    {
        console.log(err);
        return res.status(500).json({'data': err});
    });
    //res.send('respond with a resource');
});

module.exports = router;
