// 1:
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        console.log(`Nome: ${this.nome} - Idade: ${this.idade}`)
    }
}

class Aluno extends Pessoa{
    constructor(nome, idade, matricula) {
        super(nome, idade)
        this.matricula = matricula
    }

    apresentar(){
        super.apresentar()
        console.log(`Matrícula: ${this.matricula}`)
    }
}

const aluno = new Aluno('Gabriel', 16, 'SCTEC')
aluno.apresentar()

console.log('\n') //2 & 3:

class Veiculo {
    constructor(marca, ano) {
        this.marca = marca
        this.ano = ano
    }

    exibir(){
        console.log(`Marca: ${this.marca} - Ano: ${this.ano}`)
    }
}

class Carro extends Veiculo {
    constructor(marca, ano, portas) {
        super(marca, ano)
        this.portas = portas
    }

    exibir(){
        super.exibir()
        console.log(`Portas: ${this.portas}`)
    }
}

class Moto extends Veiculo {
    constructor(marca, ano, cilindradas) {
        super(marca, ano)
        this.cilindradas = cilindradas
    }

    exibir(){
        super.exibir()
        console.log(`Cilindradas: ${this.cilindradas}`)
    }
}

const carro = new Carro('Ford', 2010, 4)
const moto = new Moto('Kawasaki', 2019, 600)
carro.exibir()
moto.exibir()

console.log('\n') //4:

const frota = [new Carro('Chevrolet', 2020, 4), new Carro('Fiat', 2023, 4), new Moto('Honda', 2015, 160), new Moto('Suzuki', 2024, 350)]

for (let i = 0; i < frota.length; i++) {
    const veiculo = frota[i];
    veiculo.exibir()
}