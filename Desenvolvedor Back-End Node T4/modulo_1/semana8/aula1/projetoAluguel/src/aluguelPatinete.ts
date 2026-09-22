import { Aluguel } from "./Aluguel";
import { Segurado } from "./contratos";
import { arredondar } from "./formatacao";
import { alinhar } from "./formatacao"

export class AluguelPatinete extends Aluguel implements Segurado {
    static readonly PRECO_POR_MINUTO:number = 0.75
    static readonly TAXA_DO_SEGURO:number = 0.15

    public apolice: string;

    constructor(codigo:string, usuario:string, minutos:number, apolice:string) {
        super(codigo, usuario, minutos, AluguelPatinete.PRECO_POR_MINUTO)
        this.apolice = apolice
    }

    calcularValor(): number {
        const valor:number = super.calcularValor() + this.valorDoSeguro()
        return arredondar(valor)
    }
    
    valorDoSeguro(): number {
        return AluguelPatinete.TAXA_DO_SEGURO
    }

    descrever(): string {
        return `${super.descrever()} ${alinhar('Patinete', 13)}`
    }
}