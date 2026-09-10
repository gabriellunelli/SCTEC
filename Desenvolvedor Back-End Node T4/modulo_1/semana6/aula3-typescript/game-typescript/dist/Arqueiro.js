// const Personagem = require("./Personagem");
// vira
import Personagem from './Personagem.js';
const FLECHAS_POR_ATAQUE = 2;
const MULTIPLICADOR_DA_RAJADA = 1.05;
class Arqueiro extends Personagem {
    flechas;
    constructor(nome, vida, forca, flechas) {
        super(nome, vida, forca);
        this.flechas = flechas;
    }
    atacar(alvo) {
        if (this.flechas < FLECHAS_POR_ATAQUE) {
            console.log(`${this.nome} ficou sem flechas e parte para o combate corpo a corpo.`);
            return super.atacar(alvo);
        }
        else {
            this.flechas -= FLECHAS_POR_ATAQUE;
            const dano = Math.round(this.forca * MULTIPLICADOR_DA_RAJADA);
            console.log(`${this.nome} dispara ${FLECHAS_POR_ATAQUE} flechas em ${alvo.nome} causando ${dano} de dano. (Flechas restantes: ${this.flechas})`);
            alvo.receberDano(dano);
            return dano;
        }
    }
    descrever() {
        return `${super.descrever()} Flechas: ${this.flechas}`;
    }
}
const arqueiro = new Arqueiro('Robin Hood', 90, 14, 7);
const teste = new Arqueiro('teste', 100, 17, 3);
export default Arqueiro;
//# sourceMappingURL=Arqueiro.js.map