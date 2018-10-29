'use strict';
var event = require('events');
//let emitterInstance = require('')

var eventEmitter = new event.EventEmitter();
eventEmitter.on('LError', function (err) {
    console.error(err);
});

eventEmitter.emit('LError', 'from same class');