
const EventEitter = require('events');

const emitter = new EventEitter();

emitter.on('bellRings', ({ period, register }) => {
    console.log(`im ringing, ${period} time to work`);
})

emitter.emit('bellRings', {
    period: 'first',
    register: 'A'
});