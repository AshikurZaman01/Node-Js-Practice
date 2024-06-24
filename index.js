
const EventEmitter = require('events')

const emitter = new EventEmitter();



emitter.on('bellRings', () => {
    console.log('The bell rings!')
})

emitter.on('onRings', () => {
    console.log('The door opens!')
})

emitter.emit('bellRings')
emitter.emit('onRings')
