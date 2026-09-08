class Personagem {
    constructor(nome, vida, forca) {
        this.nome = nome
        this.vida = vida
        this.vidaMaxima = vida
        this.forca = forca
    }

    atacar(alvo){
        const dano = this.forca
        console.log(`${this.nome} ataca ${alvo.nome} causando ${dano} de dano.`)
        alvo.receberDano(dano)
        return dano
    }

    receberDano(dano){
        this.vida = Math.max(0, this.vida - dano)
        console.log(`  -> ${this.nome} fica com ${this.vida}/${this.vidaMaxima} de vida.`)
    }

    estaVivo(){
        return this.vida > 0
    }

    descrever(){
        if (this.estaVivo() === true) {
            return `${this.nome} - ${this.vida}/${this.vidaMaxima}, força: ${this.forca}, está vivo.`
        } else {
            return `${this.nome} - ${this.vida}/${this.vidaMaxima}, força: ${this.forca}, não está vivo.`
        }
        
    }
}

module.exports = Personagem

// const player1 = new Personagem('Mario', 100, 12)
// const player2 = new Personagem('Sonic', 100, 14)

// player1.atacar(player2)
// player2.atacar(player1)