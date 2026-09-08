// 1:
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome
        this.preco = preco 
        this.estoque = estoque
    }
}

const produto1 = new Produto('Air-Fryer', 399.99, 5)
console.log(produto1)
const produto2 = new Produto('Frigobar', 1199.99, 2)
console.log(produto2)

console.log('\n')// 2:

class Aluno {
    constructor(nome, curso, nota) {
        this.nome = nome
        this.curso = curso
        this.nota = nota
    }

    exibirFicha(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Curso: ${this.curso}`)
        console.log(`Nota: ${this.nota}`)
    }
}

const aluno1 = new Aluno('Emilly', 'EM', 10)
const aluno2 = new Aluno('Gabriel', 'EM', 9)
const aluno3 = new Aluno('Oswaldo', 'EM', 8)
aluno1.exibirFicha()
aluno2.exibirFicha()
aluno3.exibirFicha()

console.log('\n') //3:

class ContaPoupanca {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    sacar(valor){
        if (valor > this.saldo){
            console.log('Valor de saque maior que o saldo disponível.')
        }
        else{
            this.saldo -= valor
        }
    }

    consultarSaldo(){
        console.log(`Saldo: ${this.saldo}`)
    }
}

const conta = new ContaPoupanca('Gabriel', 10)
conta.depositar(50)
conta.consultarSaldo()
conta.sacar(40)
conta.consultarSaldo()
conta.sacar(40)

console.log('\n') //4:

class Retangulo {
    constructor(largura, altura) {
        this.largura = largura
        this.altura = altura
    }

    calcularArea(){
        return this.largura * this.altura
    }
}

const area1 = new Retangulo(5, 6)
console.log(area1.calcularArea())
const area2 = new Retangulo(3, 8)
console.log(area2.calcularArea())