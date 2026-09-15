import { arredondar } from "./formatacao";

// type

export type RegraDeDesconto = (valor:number) => number

export function aplicarDesconto(valor:number, percentual:number = 10):number {
    const desconto:number = valor * (percentual / 100)
    return arredondar(desconto)
}

export const semDesconto:RegraDeDesconto = (valor) => valor
export const dezPorcento:RegraDeDesconto = (valor) => aplicarDesconto(valor)
export const vintePorcento:RegraDeDesconto = (valor) => aplicarDesconto(valor, 20)
export const vinteReais:RegraDeDesconto = (valor) => arredondar(valor-20)

export function escolherPromocao(cupom?:string):RegraDeDesconto {
    if (cupom === 'SENAI10') {
        return dezPorcento
    }
    if (cupom === 'PRIMEIRA20') {
        return vinteReais
    }

    return semDesconto
}