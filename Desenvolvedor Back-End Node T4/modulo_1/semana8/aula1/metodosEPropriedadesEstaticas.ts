class Aluno2 {
    public nome:string
    static readonly notaMinima:number = 6

    constructor(nome:string) {
        this.nome = nome
    }

    static aprovado(nota:number):string {
        return nota >= this.notaMinima ? 'Aluno aprovado' : 'Aluno reprovado'
    }
}

const teste = new Aluno2('Robert')

console.log(Aluno2.notaMinima) //static deixa
// console.log(teste.notaMinima) // static não deixa

// STATIC SERVINDO DE CONTADOR DE OBJETOS

class Contador {
    static total:number = 0
    constructor() {
        Contador.total++   // tem que ser com o próprio nome da classe
    }
}

console.log(Contador.total)
const c1 = new Contador()
const c2 = new Contador()
const c3 = new Contador()
const c4 = new Contador()
const c5 = new Contador()
console.log(Contador.total)