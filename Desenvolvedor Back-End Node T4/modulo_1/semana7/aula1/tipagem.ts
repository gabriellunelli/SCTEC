// TIPAGEM DE FUNÇÃO (PARÂMETROS E RETORNO DA FUNÇÃO)
function somar(a:number,b:number):number {
    return a + b
}

console.log(somar(5,6))

// FUNÇÃO QUE NÃO RETORNA NADA
function boasVindas(a:string):void {
    console.log(`Bem vinda, ${a}.`)
}

boasVindas('Emilly')

// TIPANDO A FUNÇÃO INTEIRA
type Operacao = (a:number, b:number) => number

const soma:Operacao = (a, b) => a + b
const subtrai:Operacao = (a, b) => a - b

console.log(somar(16, 1))
console.log(subtrai(10,20))

// PARÂMETRO OPCIONAL(neste caso, sobrenome é opcional com o símbolo '?')
function nomeCompleto(nome:string, sobrenome?:string):void {
    if (sobrenome) {
    console.log(`${nome} ${sobrenome}`)}
    else {
        console.log(nome)
    }
}

nomeCompleto('Gabriel')

// PARÂMETRO DEFAULT
function calcularFrete(peso:number, taxa:number = 5):number {
    return peso * taxa
}

console.log(calcularFrete(10))
console.log(calcularFrete(10, 8))