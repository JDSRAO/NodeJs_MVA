'use strict';

var fs = require('fs');

var service = {};

service.readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        try
        {
            fs.readFile(fileName, function (err, data)
            {
                resolve(data.toString());
            });
        }
        catch (e)
        {
            reject(e);
        }
    });
};

module.exports = service;