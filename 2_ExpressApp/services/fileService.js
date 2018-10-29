'use strict';

const fs = require('fs');

let service = {};

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

service.promise = function (success, error) {
    return new Promise(function (resolve, reject) {
        if (error) {
            reject(error);
        }
        resolve(success);
    });
};

service.readFileText = function (filePath) {
    try
    {
        fs.readFile(filePath, function (err, data)
        {
            if (err)
            {
                return err;
            }
            return data.toString();
        });
    }
    catch (e)
    {

    }
};

module.exports = service;