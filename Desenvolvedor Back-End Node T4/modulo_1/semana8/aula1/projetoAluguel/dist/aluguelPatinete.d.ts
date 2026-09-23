import { Aluguel } from "./Aluguel";
import { Segurado } from "./contratos";
export declare class AluguelPatinete extends Aluguel implements Segurado {
    static readonly PRECO_POR_MINUTO: number;
    static readonly TAXA_DO_SEGURO: number;
    apolice: string;
    constructor(codigo: string, usuario: string, minutos: number, apolice: string);
    calcularValor(): number;
    valorDoSeguro(): number;
    descrever(): string;
}
//# sourceMappingURL=aluguelPatinete.d.ts.map