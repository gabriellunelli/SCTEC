

const limpar = (texto) => texto.trim();

const maiusculo = (texto) => texto.toUpperCase();

const exibir = (texto) => `>> ${texto}`;

const formatar = (texto) => exibir(maiusculo(limpar(texto)))

console.log(formatar("       node.js         "))