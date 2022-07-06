const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name, surname) {
    this.name = name
    this.surname = surname
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin', 'Colorado');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} ${chapolin.surname}!`))

console.log('Quem podera me salvar?')
chapolin.emit('help')