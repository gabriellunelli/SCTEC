// CLASSE PAI

class Funcionario {
    constructor(nome, cpf, salario) {
        this.nome = nome
        this.cpf = cpf
        this.salario = salario 
    }

    exibirDados(){
        console.log(`Nome:${this.nome} - CPF: ${this.cpf} - Salário: R$${this.salario.toFixed(2)}`)
    }
}

const funcionario = new Funcionario('Emilly', '123.123.123-45', 7000.00)
funcionario.exibirDados()

// EXTENDS

class Desenvolvedor extends Funcionario {
    constructor(nome, cpf, salario, lang) {
        super(nome, cpf, salario)
        this.lang = lang
    }

    exibirDados(){
        super.exibirDados()
        console.log(`Linguagem: ${this.lang}`)
    }
}

class Gerente extends Funcionario {
    constructor(nome, cpf, salario, equipe) {
        super(nome, cpf, salario)
        this.equipe = equipe
    }

    exibirDados(){
        super.exibirDados()
        console.log(`Equipe: ${this.equipe}`)
    }
}

const dev = new Desenvolvedor('Gabriel', '212.212.212-34', 3000, 'JS')
dev.exibirDados()

const ger = new Gerente('Oswaldo', '213.456.789-01', 5000, 'Operações')
ger.exibirDados()