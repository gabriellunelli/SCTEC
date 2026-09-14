import { arredondar } from "./formatacao";
import { Transportadora } from "./Transportadora";

export class TransportadoraExpressa extends Transportadora {
    taxaDeUrgencia:number

    constructor(nome:string, taxaPorKG:number, taxaPorKm:number, taxaDeUrgencia:number) {
        super(nome, taxaPorKG, taxaPorKm)
        this.taxaDeUrgencia = taxaDeUrgencia
    }

    override calcularFrete(peso:number, distancia:number):number {
            const valor:number = super.calcularFrete(peso, distancia)
            return arredondar(valor + this.taxaDeUrgencia)
    }

    override descrever(): string {
        return `${super.descrever()} (Expressa)`
    }
}