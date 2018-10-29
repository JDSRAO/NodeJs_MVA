'use strict';

const fs = require('fs');

let service = {};

service.readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        try {
            fs.readFile(fileName, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data.toString());
            });
        } catch (e) {
            reject(e);
        }
    });
};

service.writeFile = function (path, fileName, data) {
    return new Promise(function (resolve, reject) {
        try {
            fs.writeFile(`${path}/${fileName}`, data , function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = service;