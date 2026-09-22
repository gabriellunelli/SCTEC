// 1 & 4: 
class Funcionario {
    nome:string
    salario:number
    static contador:number = 0

    constructor(nome:string, salario:number) {
        this.nome = nome
        this.salario = salario
        Funcionario.contador ++
    }

    exibirDados():void{
        console.log(`Nome: ${this.nome} - Salário: R$${this.salario}`)
    }

    static exibirTotal():void {
        console.log(`Total de funcionários: ${Funcionario.contador}`)
    }
}

const funcionario = new Funcionario('Gabriel', 1000)
funcionario.exibirDados()

// 2 & 3:
class Gerente extends Funcionario {
    bonus:number

    constructor(nome:string, salario:number, bonus:number) {
        super(nome, salario)
        this.bonus = bonus
    }

    override exibirDados(): void {
        super.exibirDados()
        console.log(`Bônus: ${this.bonus}`)
    }
}

const gerente = new Gerente('Oswaldo', 8000, 500)
gerente.exibirDados()

// resto 4:

const gerenteMaster = new Gerente('Emilly', 10000, 1000)
const funcionario2 = new Funcionario('Robert', 1500)
const funcionario3 = new Funcionario('Roerval', 1400)

Funcionario.exibirTotal()