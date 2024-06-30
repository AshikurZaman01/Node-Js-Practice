

const EventEmitter = require('events');

class myEmitter extends EventEmitter { };

const myEventsEmitter = new myEmitter();

myEventsEmitter.on('event', () => {
    console.log('Event fired');
})

myEventsEmitter.emit('event');