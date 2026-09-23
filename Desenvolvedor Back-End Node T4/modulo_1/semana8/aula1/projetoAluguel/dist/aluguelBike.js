"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AluguelBike = void 0;
const Aluguel_1 = require("./Aluguel");
const formatacao_1 = require("./formatacao");
class AluguelBike extends Aluguel_1.Aluguel {
    static PRECO_POR_MINUTO = 0.4;
    static MINUTOS_LIVRES = 15;
    comCapacete;
    constructor(codigo, usuario, minutos, comCapacete) {
        super(codigo, usuario, minutos, AluguelBike.PRECO_POR_MINUTO);
        this.comCapacete = comCapacete;
    }
    calcularValor() {
        const minutosCobrados = this.minutos - AluguelBike.MINUTOS_LIVRES;
        if (minutosCobrados <= 0) {
            return Aluguel_1.Aluguel.TAXA_DE_DESBLOQUEIO;
        }
        else {
            const valor = Aluguel_1.Aluguel.TAXA_DE_DESBLOQUEIO + minutosCobrados * this.precoPorMinuto;
            return (0, formatacao_1.arredondar)(valor);
        }
    }
    descrever() {
        return `${super.descrever()} ${(0, formatacao_1.alinhar)('Bicicleta', 13)}`;
    }
}
exports.AluguelBike = AluguelBike;
//# sourceMappingURL=aluguelBike.js.map