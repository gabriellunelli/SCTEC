export interface Cobravel{
    calcularValor():number
    descrever():string
}

export interface Segurado{
    readonly apolice:string
    valorDoSeguro():number
}