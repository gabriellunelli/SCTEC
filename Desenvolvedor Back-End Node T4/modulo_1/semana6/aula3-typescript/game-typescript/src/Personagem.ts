class Personagem {
    nome:string
    vida:number
    vidaMaxima:number
    forca:number
    constructor(nome:string, vida:number, forca:number) {
        this.nome = nome
        this.vida = vida
        this.forca = forca
        this.vidaMaxima = vida
    }
                        //tipo do retorno
    atacar(alvo:Personagem):number {
        const dano = this.forca
        console.log(`${this.nome} ataca ${alvo.nome} causando ${dano} de dano.`)
        alvo.receberDano(dano)
        return dano
    }

    receberDano(dano:number){
        this.vida = Math.max(0, this.vida - dano)
        console.log(`  -> ${this.nome} fica com ${this.vida}/${this.vidaMaxima} de vida.`)
    }

    estaVivo():boolean{
        return this.vida > 0
    }

    descrever():string{
        if (this.estaVivo() === true) {
            return `${this.nome} - ${this.vida}/${this.vidaMaxima}, força: ${this.forca}, está vivo.`
        } else {
            return `${this.nome} - ${this.vida}/${this.vidaMaxima}, força: ${this.forca}, não está vivo.`
        }
        
    }
}

export default Personagem