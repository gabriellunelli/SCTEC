"use strict";
// 1) INTERFACE
Object.defineProperty(exports, "__esModule", { value: true });
// 2)CLASSE TIPADA
class CartaoFidelidade {
    numero;
    titular;
    pontos;
    constructor(numero, titular, pontos = 0) {
        this.numero = numero;
        this.titular = titular;
        this.pontos = pontos;
    }
    // EXEMPLO DE ENCAPSULAMENTO: OS PONTOS SÓ MUDAM POR MEIO DE MÉTODOS
    acumular(valorGasto) {
        if (valorGasto <= 0) {
            this.registrar('Valor inválido, nada foi acumulado');
        }
        else {
            const ganhos = Math.floor(valorGasto / 10);
            this.pontos += ganhos;
            this.registrar(`+${ganhos} pontos. (Compra de R$${valorGasto})`);
        }
    }
    resgatar(pontos) {
        if (pontos > this.pontos) {
            this.registrar(`Resgate de ${pontos} pontos negado: há apenas ${this.pontos} pontos na conta.`);
            return false;
        }
        else {
            this.pontos -= pontos;
            this.registrar(`-${pontos} pontos regatados`);
            return true;
        }
    }
    consultarPontos() {
        return this.pontos;
    }
    registrar(msg) {
        console.log(`[Cartão ${this.numero} - ${this.titular}] ${msg}`);
    }
}
// 3) HERANÇA: O CARTÃO VIP HERDA TUDO E GANHA BÔNUS
class CartaoVip extends CartaoFidelidade {
    ganharBonusAniversario() {
        this.pontos += 50;
        console.log(`[Cartão ${this.numero} - ${this.titular}] +50 pontos de aniversário (VIP)`);
    }
}
// EXECUÇÃO
const cartaoGabriel = new CartaoFidelidade(1001, 'Gabriel Lunelli');
const cartaoEmilly = new CartaoVip(1000, 'Emilly Vitória', 50);
cartaoGabriel.acumular(100);
cartaoEmilly.ganharBonusAniversario();
const cartoes = [cartaoEmilly, cartaoGabriel];
for (const cartao of cartoes) {
    console.log(`${cartao.numero} | ${cartao.titular} | ${cartao.consultarPontos()} pontos`);
}
//# sourceMappingURL=index.js.map