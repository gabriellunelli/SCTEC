import Personagem from './Personagem.js';
declare class Arqueiro extends Personagem {
    flechas: number;
    constructor(nome: string, vida: number, forca: number, flechas: number);
    atacar(alvo: Personagem): number;
    descrever(): string;
}
export default Arqueiro;
//# sourceMappingURL=Arqueiro.d.ts.map