const Carro = require('./Carro')
const Mecanico = require('./Mecanico')

const mecanico = new Mecanico('Zé')
const carro = new Carro('BMW', 'Emilly')
const carro2 = new Carro('Gol', 'Oswaldo')

carro.rodar(100000)
carro2.rodar(400000)

console.log(carro.info())
console.log(carro2.info())

mecanico.trocarOleo(carro)
mecanico.trocarOleo(carro2)

console.log(carro.info())
console.log(carro2.info())