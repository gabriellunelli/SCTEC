// 1:

const alunos = [
    {
        nome: 'Emilly',
        idade: 16,
        curso: 'Nail Design / Ensino Médio'
    },
    {
        nome: 'Gabriel',
        idade: 16,
        curso: 'Desenvolvimento Back-End Node.js'
    }
]

console.log(alunos)

// 3:
const produtos = [
    {
        nome: 'Notebook',
        preco: 3500
    },
    {
        nome: 'Mouse',
        preco: 120
    },
    {
        nome: 'Monitor',
        preco: 950
    }
]

for(let i = 0; i < produtos.length; i++){
    console.log(`${produtos[i].nome} - R$ ${produtos[i].preco}`)
}