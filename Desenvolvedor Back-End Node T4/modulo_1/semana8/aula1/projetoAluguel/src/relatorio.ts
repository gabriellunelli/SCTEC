import { Cobravel } from "./contratos";
import { alinhar, formatarReal, repetir } from "./formatacao";

export function exibirCabecalho(titulo:string):void {
    console.log(repetir('='))
    console.log(titulo.toUpperCase())
    console.log(
        ' ' + alinhar('CÓDIGO', 10) +
        alinhar('USUÁRIO', 15) +
        alinhar('TEMPO', 10) +
        alinhar('VEÍCULO', 13) +
        'VALOR'
    )
    console.log(repetir('-'));
    
    
}

export function exibirLinha(item:Cobravel):void {
    console.log(` ${item.descrever()} ${formatarReal(item.calcularValor())}`);
}

export function exibirRodape(quantidade:number, totalDoDia:number):void {
    console.log(repetir('-'));
    console.log(` Corridas do dia: ${quantidade}`);
    console.log(` Total arrecadado: ${formatarReal(totalDoDia)}`);
    console.log(repetir('-'));
}

export function exibirTitulo(texto:string):void {
    console.log(repetir('='))
    console.log(` ${texto.toUpperCase()}`);
    console.log(repetir('='))
}