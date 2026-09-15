import { formatarReal, arredondar, emMaiusculas, repetir, alinhar } from "./formatacao";
import { escolherPromocao } from "./promocoes";



console.log(formatarReal(5564.75), arredondar(123.55, 2))

let nome = 'gabriel'

console.log(repetir('='))

console.log(emMaiusculas(nome))

console.log(alinhar(nome))

console.log(repetir('I love my Princess', 3))

console.log(repetir('='))


const promocaoDez = escolherPromocao('SENAI10')

const valorDesconto = promocaoDez(100)

console.log(valorDesconto)