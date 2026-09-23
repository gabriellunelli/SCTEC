"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AluguelPatinete = void 0;
const Aluguel_1 = require("./Aluguel");
const formatacao_1 = require("./formatacao");
const formatacao_2 = require("./formatacao");
class AluguelPatinete extends Aluguel_1.Aluguel {
    static PRECO_POR_MINUTO = 0.75;
    static TAXA_DO_SEGURO = 0.15;
    apolice;
    constructor(codigo, usuario, minutos, apolice) {
        super(codigo, usuario, minutos, AluguelPatinete.PRECO_POR_MINUTO);
        this.apolice = apolice;
    }
    calcularValor() {
        const valor = super.calcularValor() + this.valorDoSeguro();
        return (0, formatacao_1.arredondar)(valor);
    }
    valorDoSeguro() {
        return AluguelPatinete.TAXA_DO_SEGURO;
    }
    descrever() {
        return `${super.descrever()} ${(0, formatacao_2.alinhar)('Patinete', 13)}`;
    }
}
exports.AluguelPatinete = AluguelPatinete;
//# sourceMappingURL=aluguelPatinete.js.map