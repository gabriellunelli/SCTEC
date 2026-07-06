var pessoa = require("./commons/Pessoa");
var soma = require("./commons/Soma");
var imposto = require("./commons/CalculoImposto");

gabriel = pessoa();


// console.log(JSON.stringify(gabriel));

// console.log(soma(2,2));

console.log("O valor do produto com imposto: " + imposto.adicionar(10));
console.log("O valor do imposto: " + imposto.valor(10));
console.log("Taxa do imposto: " + imposto.taxa);