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

