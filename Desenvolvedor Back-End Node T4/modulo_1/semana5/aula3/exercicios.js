// SISTEMA DE PEDIDOS
let estoque = 10

function validarCarrinho() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('Carrinho validado.'))
        }, 1000);
    })
}

function processarPagamento() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('Pagamento processado e aprovado.'))
        }, 1000);
    })
}

function enviarEmail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('Email enviado com sucesso.'))
        }, 1000);
    })
}

function atualizarEstoque() {
    estoque -= 1

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log(`O estoque agora possui ${estoque} unidades deste produto.`))
        }, 1000);
    })
}

async function carregar() {
    try {
        const processo = await validarCarrinho()
        await processarPagamento()
        await Promise.all ([enviarEmail(), atualizarEstoque()])
    } catch (error) {
        console.log(error)
    } finally {
        console.log(`Fim da execução: ${new Date().toLocaleTimeString()}`)
    }
}

carregar()