"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluguel = void 0;
const formatacao_1 = require("./formatacao");
class Aluguel {
    static TAXA_DE_DESBLOQUEIO = 2.5;
    static LIMITE_DE_MINUTOS = 30;
    static totalDeAlugueis = 0;
    codigo;
    usuario;
    minutos;
    precoPorMinuto;
    constructor(codigo, usuario, minutos, precoPorMinuto) {
        this.codigo = codigo;
        this.usuario = usuario;
        this.minutos = minutos;
        this.precoPorMinuto = precoPorMinuto;
        Aluguel.totalDeAlugueis++;
    }
    calcularValor() {
        const valor = Aluguel.TAXA_DE_DESBLOQUEIO + this.minutos * this.precoPorMinuto;
        return (0, formatacao_1.arredondar)(valor);
    }
    descrever() {
        return ((0, formatacao_1.alinhar)(this.codigo, 10) + (0, formatacao_1.alinhar)(this.usuario, 15) + (0, formatacao_1.alinhar)(this.minutos + 'min', 15));
    }
    static ehLongo(minutos) {
        return minutos > Aluguel.LIMITE_DE_MINUTOS;
    }
    static exibirTotal() {
        console.log(`Alugéis registrados até agora: ${Aluguel.totalDeAlugueis}`);
    }
}
exports.Aluguel = Aluguel;
//# sourceMappingURL=Aluguel.js.map