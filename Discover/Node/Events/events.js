const { EventEmitter} = require('events');
const myEvent = new EventEmitter()

myEvent.on('saySomething', (message) => {
    console.log('Eu ouvi você', message);
})

myEvent.emit('saySomething', "Luiz")