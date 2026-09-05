// Desafio - Pedido de delivery (exemplo de Callback Hell)

// function fazerPedido(item, callback) {
//     const pedido = {id: 1, item: item}
//     console.log(`Pedido #${pedido.id} de ${pedido.item} confirmado!`)
//     setTimeout(() => {
//         callback(pedido)
//     }, 1000)
// }

// function prepararPedido(pedido, callback) {
//     console.log(`Pedido #${pedido.id} sendo preparado!`)
//     setTimeout(() => {
//         callback(pedido)
//     }, 1000)
// }

// function entregarPedido(pedido) {
//     console.log(`Pedido #${pedido.id} no caminho de entrega!`)
//     setTimeout(() => {
//         console.log(`Pedido foi entregue!`)
//     }, 1000)
// }

// fazerPedido("Hambúrguer", (pedido) => {
//     prepararPedido(pedido, (pedido) => {
//         entregarPedido(pedido)
//     })
// })

// Refatorar:

function fazerPedido() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('1. Pedido realizado'))
        }, 1000)
    })
}

function prepararPedido() {
    return new Promise((resolve) => {
        // console.log('2. Pedido realizado') por conta da assíncronidade ele executa antes de todos

        setTimeout(() => {
            resolve(console.log('2. Pedido sendo preparado'))
        }, 1000)
    })
}

function entregarPedido() {
    return new Promise((resolve) => {
        // console.log('4. Pedido indo para entrega') por conta da assíncronidade ele executa logo após o passo 2

        setTimeout(() => {
            resolve(console.log('3. Pedido foi entregue'))
        }, 1000)
    })
}

// fazerPedido()
// .then(() => {prepararPedido()})
// .then(() => {entregarPedido()})
// .catch((erro) => {return 'Ocorreu algum problema'})
// .finally(() => {return 'Avalie seu pedido!'})

// Refatorar com promise + async/await
async function versaoAsync() {
    const pedido = await fazerPedido()
    await prepararPedido()
    await entregarPedido()
}

versaoAsync()