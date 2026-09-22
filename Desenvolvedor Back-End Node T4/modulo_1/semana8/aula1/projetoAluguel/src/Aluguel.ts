import { Cobravel } from "./contratos"
import { alinhar, arredondar } from "./formatacao"

export class Aluguel implements Cobravel{
    static readonly TAXA_DE_DESBLOQUEIO = 2.5
    static readonly LIMITE_DE_MINUTOS = 30
    static totalDeAlugueis:number = 0

    public readonly codigo:string
    public readonly usuario:string
    public readonly minutos:number

    protected precoPorMinuto:number

    constructor(codigo:string, usuario:string, minutos:number, precoPorMinuto:number) {
        this.codigo = codigo
        this.usuario = usuario
        this.minutos = minutos
        this.precoPorMinuto = precoPorMinuto

        Aluguel.totalDeAlugueis++
    }

    calcularValor(): number {
        const valor:number = Aluguel.TAXA_DE_DESBLOQUEIO + this.minutos * this.precoPorMinuto
        return arredondar(valor)
    }
    descrever(): string {
        return (alinhar(this.codigo, 10) + alinhar(this.usuario, 15) + alinhar(this.minutos + 'min', 15))
    }

    static ehLongo(minutos:number):boolean{
        return minutos > Aluguel.LIMITE_DE_MINUTOS
    }

    static exibirTotal():void {
        console.log(`Alugéis registrados até agora: ${Aluguel.totalDeAlugueis}`)
    }
}