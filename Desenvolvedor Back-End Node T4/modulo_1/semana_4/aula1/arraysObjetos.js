const produtosEletronicos = [
    {
        nome: "Notebook",
        preco: 3500,
        estoque: 9
    },
    {
        nome: "Smartphone", 
        preco: 2000, 
        estoque: 24
    },
    {
        nome: "Tablet", 
        preco: 2500, 
        estoque: 1
    }
]

console.log(`Nome do primeiro produto: ${produtosEletronicos[0].nome}`)
console.log(`Preço do segundo produto (${produtosEletronicos[1].nome}): ${produtosEletronicos[1].preco}`)
console.log(`Estoque do terceiro produto (${produtosEletronicos[2].nome}): ${produtosEletronicos[2].estoque}`)

// ITERANDO SOBRE O ARRAY DE OBJETOS
for(let i = 0; i < produtosEletronicos.length; i++){
    console.log(`    Produto: ${produtosEletronicos[i].nome} Preço: ${produtosEletronicos[i].preco} Estoque: ${produtosEletronicos[i].estoque}`)
}

// FUNÇÃO OBJECT
console.log(`Chaves do array de objetos: ${Object.keys(produtosEletronicos[0])}`)
console.log(`Valores do array de objetos: ${Object.values(produtosEletronicos[0])}`)
console.log(`Ambos do array de objetos: ${Object.entries(produtosEletronicos[0])}`)

// ADICONANDO UM NOVO OBJETO AO ARRAY
produtosEletronicos.push(
    {
        nome: "Monitor", 
        preco: 1000, 
        estoque: 12
    }
)
console.log(`Novo produto: ${Object.entries(produtosEletronicos[3])}`)

// ALTERANDO UMA PROPRIEDADE DO OBJETO DO ARRAY
desconto = 100
produtosEletronicos[3].preco -= desconto
console.log(`Novo preço após desconto do Monitor: ${produtosEletronicos[3].preco}`)