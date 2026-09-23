"use strict";
// just a copy of semana7/aula1/sysfretes/src/formatacao.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.repetir = exports.alinhar = exports.emMaiusculas = exports.arredondar = exports.formatarReal = void 0;
const formatarReal = (valor) => {
    return `R$${valor.toFixed(2).replace('.', ',')}`;
};
exports.formatarReal = formatarReal;
const arredondar = (valor, casas = 2) => {
    const fator = Math.pow(10, casas);
    return Math.round(valor * fator) / fator;
};
exports.arredondar = arredondar;
const emMaiusculas = (text) => text.toUpperCase();
exports.emMaiusculas = emMaiusculas;
const alinhar = (texto, largura = 16) => {
    let saida = texto;
    while (saida.length < largura) {
        saida = ' ' + saida;
    }
    return saida;
};
exports.alinhar = alinhar;
const repetir = (caractere, quantidade = 58) => {
    let saida = '';
    for (let i = 0; i < quantidade; i++) {
        saida += caractere;
    }
    return saida;
};
exports.repetir = repetir;
//# sourceMappingURL=formatacao.js.map