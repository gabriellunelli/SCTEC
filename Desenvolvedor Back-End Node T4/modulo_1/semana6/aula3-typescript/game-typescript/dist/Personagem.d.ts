declare class Personagem {
    nome: string;
    vida: number;
    vidaMaxima: number;
    forca: number;
    constructor(nome: string, vida: number, forca: number);
    atacar(alvo: Personagem): number;
    receberDano(dano: number): void;
    estaVivo(): boolean;
    descrever(): string;
}
export default Personagem;
//# sourceMappingURL=Personagem.d.ts.map