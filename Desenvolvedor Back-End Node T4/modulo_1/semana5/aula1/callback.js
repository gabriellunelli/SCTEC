function executar(callback) {
    callback();
}

function dizerOi() {
    console.log("Oi!")
}

function dizerTchau() {
    console.log("Tchau!")
}

executar(dizerOi)     // Chama a função sem "()" para não executar no momento
executar(dizerTchau)

// =============
const lista = [1, 2, 3]
lista.forEach((numero) => {
    console.log(numero);     // Essa função é o callback
});

// CALLBACK ASSÍNCRONO
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");