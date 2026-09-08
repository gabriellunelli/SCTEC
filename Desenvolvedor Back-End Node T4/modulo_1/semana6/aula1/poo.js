class Cliente {
    constructor(nome, cpf, saldo) {
        this.nome = nome
        this.cpf = cpf
        this.saldo = saldo
    }

    // Métodos
    exibirDados(){
        console.log(`Cliente: ${this.nome}`)
        console.log(`Saldo: ${this.saldo}`)
    }
}

const cliente1 = new Cliente('Gabriel', 1231231, 400)
const cliente2 = new Cliente('Emilly', 1231232, 50000)

console.log(cliente1.nome)
console.log(cliente2)
cliente1.exibirDados()

// CLASSE CONTA
class Conta {
    constructor(nome, saldo, cpf) {
        this.nome = nome
        this.saldo = saldo
        this.cpf = cpf
    }

    depositar(valor){
        if (valor > 0) {
            this.saldo += valor
        }
        else {
            console.log('Valor inválido.')
        }
    }

    sacar(valor){
        if (valor <= this.saldo && valor > 0){
            this.saldo -= valor
        }
        else {
            console.log('Valor inválido')
        }
    }
}

const conta = new Conta('Gabriel', 0, 1231231)

conta.sacar(10)
conta.depositar(50)
console.log(conta.saldo)
conta.sacar(15)
console.log(conta.saldo)
conta.depositar(-50)