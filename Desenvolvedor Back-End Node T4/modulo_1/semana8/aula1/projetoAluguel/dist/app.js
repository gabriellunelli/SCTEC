"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aluguel_1 = require("./Aluguel");
const aluguelBike_1 = require("./aluguelBike");
const alugueisDoDia_1 = require("./alugueisDoDia");
const formatacao_1 = require("./formatacao");
const relatorio_1 = require("./relatorio");
(0, relatorio_1.exibirCabecalho)('Mobi Ponto - Tarifas de hoje');
console.log(` Desbloqueio (qualquer veículo): ${(0, formatacao_1.formatarReal)(Aluguel_1.Aluguel.TAXA_DE_DESBLOQUEIO)}`);
console.log(` Bicicleta: ${(0, formatacao_1.formatarReal)(aluguelBike_1.AluguelBike.PRECO_POR_MINUTO)} por minuto ${aluguelBike_1.AluguelBike.MINUTOS_LIVRES} minutos livres \n`);
(0, relatorio_1.exibirCabecalho)('Mobi Ponto - Fechamento do dia');
let totalDoDia = 0;
for (const aluguel of alugueisDoDia_1.alugueisDoDia) {
    (0, relatorio_1.exibirLinha)(aluguel);
    totalDoDia = (0, formatacao_1.arredondar)(totalDoDia + aluguel.calcularValor());
}
(0, relatorio_1.exibirRodape)(alugueisDoDia_1.alugueisDoDia.length, totalDoDia);
(0, relatorio_1.exibirTitulo)(`Corridas acima de ${Aluguel_1.Aluguel.LIMITE_DE_MINUTOS} minutos`);
for (const aluguel of alugueisDoDia_1.alugueisDoDia) {
    if (Aluguel_1.Aluguel.ehLongo(aluguel.minutos)) {
        console.log(` ${aluguel.codigo} ${aluguel.usuario} ${aluguel.minutos}min`);
    }
}
console.log('');
(0, relatorio_1.exibirTitulo)('Contador da estação');
Aluguel_1.Aluguel.exibirTotal();
const atrasada = new aluguelBike_1.AluguelBike('MP-1003', 'Robert', 6, true);
console.log(` Entrou agora: ${atrasada.codigo} por ${(0, formatacao_1.formatarReal)(atrasada.calcularValor())}`);
Aluguel_1.Aluguel.exibirTotal();
console.log('');
//# sourceMappingURL=app.js.map