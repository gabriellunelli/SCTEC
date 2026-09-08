class Mecanico {
    constructor(nome) {
        this.nome = nome
        this.trocasFeitas = 0
    }

    trocarOleo(carro){
        if (!carro.oleoSujo){
            return `${this.nome}: O ${carro.modelo} está com o óleo limpo.`
        }
        carro.oleoSujo = false
        this.trocasFeitas ++
        console.log(`${this.nome} trocou o óleo do ${carro.modelo}`)
    }
}

module.exports = Mecanico