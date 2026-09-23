import { Aluguel } from "./Aluguel";
export declare class AluguelBike extends Aluguel {
    static readonly PRECO_POR_MINUTO: number;
    static readonly MINUTOS_LIVRES: number;
    readonly comCapacete: boolean;
    constructor(codigo: string, usuario: string, minutos: number, comCapacete: boolean);
    calcularValor(): number;
    descrever(): string;
}
//# sourceMappingURL=aluguelBike.d.ts.map