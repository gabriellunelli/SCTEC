class Personagem {
    nome;
    vida;
    vidaMaxima;
    forca;
    constructor(nome, vida, forca) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.vidaMaxima = vida;
    }
    //tipo do retorno
    atacar(alvo) {
        const dano = this.forca;
        console.log(`${this.nome} ataca ${alvo.nome} causando ${dano} de dano.`);
        alvo.receberDano(dano);
        return dano;
    }
    receberDano(dano) {
        this.vida = Math.max(0, this.vida - dano);
        console.log(`  -> ${this.nome} fica com ${this.vida}/${this.vidaMaxima} de vida.`);
    }
    estaVivo() {
        return this.vida > 0;
    }
    descrever() {
        if (this.estaVivo() === true) {
            return `${this.nome} - ${this.vida}/${this.vidaMaxima}, força: ${this.forca}, está vivo.`;
        }
        else {
            return `${this.nome} - ${this.vida}/${this.vidaMaxima}, força: ${this.forca}, não está vivo.`;
        }
    }
}
export default Personagem;
//# sourceMappingURL=Personagem.js.map