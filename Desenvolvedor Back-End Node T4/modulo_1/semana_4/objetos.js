const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 8
}

// Notação de Ponto
console.log(produto.nome)
console.log(produto.preco)

console.log("===================================")

// Notação de Colchetes
const carro = {
    marca: "Ford",
    "ano modelo": 2024,
    123: "Código numérico",
    estaVendido: function() {
        console.log("Carro vendido")
    }
}

console.log(carro.marca)
console.log(carro["ano modelo"])
console.log(carro[123])
carro.estaVendido()

// MANIPULANDO PROPRIEDADES DO OBJETO
carro.marca = "Chevrolet"
console.log(`Marca modificada: ${carro.marca}`)

// ADICIONANDO PROPRIEDADES AO OBJETO
carro.tipoCombustivel = "Flex"
console.log(`Propriedade de tipo de combustível adicionada: ${carro.tipoCombustivel}`)

// REMOVENDO PROPRIEDADES DO OBJETO
delete carro.estaVendido
console.log(carro.estaVendido)