'use strict';

var service = {};

service.getUsers = function ()
{
    return new Promise(function (resolve, reject)
    {
        try
        {
            //throw new Exception('error occrred');
            resolve('test');
        }
        catch (e)
        {
            reject(e);
        }
    });
};

module.exports = service;