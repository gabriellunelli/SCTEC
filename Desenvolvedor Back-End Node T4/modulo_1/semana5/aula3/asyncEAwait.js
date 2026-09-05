function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('usuário: Gabriel')
        }, 1000);
    })
}

function buscarPedidos(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`pedido do "${user}"`)
        }, 1000);
    })
}

// ==============EXEMPLO================

// async function carregar() {
//     const u = await buscarUsuario()
//     const p = await buscarPedidos(u)

//     console.log(p)
// }

// TRY / CATCH
async function carregar() {
    try {
        const u = await buscarUsuario()
        const p = await buscarPedidos(u)

        console.log(p)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Processo terminou.')
    }
}

carregar()