const produtos = [
    {
        nome: "Notebook", 
        preco: 3500,
        id: 1
    },
    {
        nome: "Mouse", 
        preco: 150,
        id: 2
    },
    {
        nome: "Monitor", 
        preco: 1000,
        id: 3
    },
    {
        nome: "Mouse-Pad", 
        preco: 50,
        id: 4
    }
]

// FIND
const item =  produtos.find(p => p.nome === "Mouse")
console.log("Método Find: ", item)

// FILTER
const itensFiltrados = produtos.filter(p => p.preco > 500)
console.log("Filter: ", itensFiltrados)

// MAP
const nomesProdutos = produtos.map(p => p.nome)
console.log("Map: ", nomesProdutos)

// EVERY
const todosProdutosCaros = produtos.every(p => p.preco > 100)
console.log("Every: ", todosProdutosCaros)

// SOME
const algumProdutoBarato = produtos.some(p => p.preco < 100)
console.log("Some: ", algumProdutoBarato)

// REDUCE
const somaPrecos = produtos.reduce((total, p)=> total + p.preco, 0)
console.log("Reduce: ", somaPrecos)