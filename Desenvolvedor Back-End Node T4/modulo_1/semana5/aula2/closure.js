function criarContador() {

    let total = 0;

    return function() {
        total++;
        return total;
    };
}

const contador = criarContador();

console.log(contador());
console.log(contador());
console.log(contador());

// CLOSURE + VARIÁVEL PRIVADA
function criarConta() {

    let saldo = 0;

    return {
        depositar(valor) {
            saldo += valor;
        },

        consultar() {
            return saldo;
        }
    };
}

const conta = criarConta();

conta.depositar(500);

console.log(conta.consultar());

// console.log(conta.saldo) = undefined