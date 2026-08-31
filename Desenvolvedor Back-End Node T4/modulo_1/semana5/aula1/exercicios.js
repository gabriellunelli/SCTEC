// 1: Calculadora com callback
function calcular(a, b, operacao){
    console.log('Iniciando cálculo...')
    operacao(a, b)
    console.log('Fim do cálculo')
}
calcular(10, 20, (a, b) => console.log(a + b))
calcular(10, 20, (a, b) => console.log(a - b))
calcular(10, 20, (a, b) => console.log(a / b))
calcular(10, 20, (a, b) => console.log(a * b))


// 2: Cronômetro
// let tempo = 0
// const cronometro = setInterval(() => {
//     tempo++
//     console.log(tempo)
//     if (tempo === 5) {
//         clearInterval(cronometro)
//         console.log("Cronômetro encerrado...")
//     }
// }, 1000)

// 3:Relatório de vendas
const vendas = [
    {
        nome: "Notebook",
        valor: 3000
    },
    {
        nome: "Geladeira",
        valor: 4000
    },
    {
        nome: "Mouse",
        valor: 120
    },
    {
        nome: "Celular",
        valor: 1300
    }
]

vendas.forEach(venda => {
    console.log(`${venda.nome} - R$${venda.valor}`)
});

const acimaDe500 = vendas.filter(vendas => vendas.valor > 500)
console.log(acimaDe500)

const faturamentoTotal = vendas.reduce((total, vendas) => total + vendas.valor, 0)
console.log(faturamentoTotal)

// Desafio - Pedido de delivery (exemplo de Callback Hell)

function fazerPedido(item, callback) {
    const pedido = {id: 1, item: item}
    console.log(`Pedido #${pedido.id} de ${pedido.item} confirmado!`)
    setTimeout(() => {
        callback(pedido)
    }, 1000)
}

function prepararPedido(pedido, callback) {
    console.log(`Pedido #${pedido.id} sendo preparado!`)
    setTimeout(() => {
        callback(pedido)
    }, 1000)
}

function entregarPedido(pedido) {
    console.log(`Pedido #${pedido.id} no caminho de entrega!`)
    setTimeout(() => {
        console.log(`Pedido foi entregue!`)
    }, 1000)
}

fazerPedido("Hambúrguer", (pedido) => {
    prepararPedido(pedido, (pedido) => {
        entregarPedido(pedido)
    })
})