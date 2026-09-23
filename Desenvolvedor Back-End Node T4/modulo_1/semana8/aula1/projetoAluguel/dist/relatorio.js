"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exibirCabecalho = exibirCabecalho;
exports.exibirLinha = exibirLinha;
exports.exibirRodape = exibirRodape;
exports.exibirTitulo = exibirTitulo;
const formatacao_1 = require("./formatacao");
function exibirCabecalho(titulo) {
    console.log((0, formatacao_1.repetir)('='));
    console.log(titulo.toUpperCase());
    console.log(' ' + (0, formatacao_1.alinhar)('CÓDIGO', 10) +
        (0, formatacao_1.alinhar)('USUÁRIO', 15) +
        (0, formatacao_1.alinhar)('TEMPO', 10) +
        (0, formatacao_1.alinhar)('VEÍCULO', 13) +
        'VALOR');
    console.log((0, formatacao_1.repetir)('-'));
}
function exibirLinha(item) {
    console.log(` ${item.descrever()} ${(0, formatacao_1.formatarReal)(item.calcularValor())}`);
}
function exibirRodape(quantidade, totalDoDia) {
    console.log((0, formatacao_1.repetir)('-'));
    console.log(` Corridas do dia: ${quantidade}`);
    console.log(` Total arrecadado: ${(0, formatacao_1.formatarReal)(totalDoDia)}`);
    console.log((0, formatacao_1.repetir)('-'));
}
function exibirTitulo(texto) {
    console.log((0, formatacao_1.repetir)('='));
    console.log(` ${texto.toUpperCase()}`);
    console.log((0, formatacao_1.repetir)('='));
}
//# sourceMappingURL=relatorio.js.map