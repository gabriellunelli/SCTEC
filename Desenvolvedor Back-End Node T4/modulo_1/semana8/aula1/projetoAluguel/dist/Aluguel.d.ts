import { Cobravel } from "./contratos";
export declare class Aluguel implements Cobravel {
    static readonly TAXA_DE_DESBLOQUEIO = 2.5;
    static readonly LIMITE_DE_MINUTOS = 30;
    static totalDeAlugueis: number;
    readonly codigo: string;
    readonly usuario: string;
    readonly minutos: number;
    protected precoPorMinuto: number;
    constructor(codigo: string, usuario: string, minutos: number, precoPorMinuto: number);
    calcularValor(): number;
    descrever(): string;
    static ehLongo(minutos: number): boolean;
    static exibirTotal(): void;
}
//# sourceMappingURL=Aluguel.d.ts.map