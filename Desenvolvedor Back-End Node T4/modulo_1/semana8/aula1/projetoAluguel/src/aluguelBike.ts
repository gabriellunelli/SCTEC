import { Aluguel } from "./Aluguel";
import { alinhar, arredondar } from "./formatacao";

export class AluguelBike extends Aluguel {
    static readonly PRECO_POR_MINUTO:number = 0.4
    static readonly MINUTOS_LIVRES:number = 15

    public readonly comCapacete:boolean

    constructor(codigo:string, usuario:string, minutos:number, comCapacete:boolean) {
        super(codigo, usuario, minutos, AluguelBike.PRECO_POR_MINUTO)
        this.comCapacete = comCapacete    
    }

    calcularValor(): number {
        const minutosCobrados:number = this.minutos - AluguelBike.MINUTOS_LIVRES

        if (minutosCobrados <= 0) {
            return Aluguel.TAXA_DE_DESBLOQUEIO
        } else {
            const valor:number = Aluguel.TAXA_DE_DESBLOQUEIO + minutosCobrados * this.precoPorMinuto
            return arredondar(valor)
        }
    }

    descrever(): string {
        return `${super.descrever()} ${alinhar('Bicicleta', 13)}`
    }
}