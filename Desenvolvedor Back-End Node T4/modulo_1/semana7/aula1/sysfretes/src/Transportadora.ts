import { arredondar } from "./formatacao"

export class Transportadora {
    nome:string
    taxaPorKG:number
    taxaPorKm:number

    constructor(nome:string, taxaPorKG:number, taxaPorKm:number = 0.5) {
        this.nome = nome
        this.taxaPorKG = taxaPorKG
        this.taxaPorKm = taxaPorKm
    }

    calcularFrete(peso:number, distancia:number):number {
        const valor:number = (peso * this.taxaPorKG) + (distancia * this.taxaPorKm)
        return arredondar(valor)
    }

    descrever():string {
        return this.nome
    }
}