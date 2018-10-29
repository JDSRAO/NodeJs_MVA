'use strict';

var event = require('events');

event.EventEmitter.emit('LError', 'from same class');

var service = {};

service.error = function (errInfo)
{
    console.error(errInfo);
}

service.info = function (info)
{
    console.log(info);
}

module.exports = service;