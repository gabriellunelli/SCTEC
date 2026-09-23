// Tipando
function buscarNome():Promise<string> {
    return new Promise((resolve) => {
        resolve('Gabriel')
    })
}

// then: recebendo o valor que chegou - O compilador conhece o que chegou
buscarNome().then((nome) => {
    console.log(nome.toUpperCase())
})

console.log('Isso roda antes')


// ASYNC: a função que devolve uma Promise
async function buscarNumero():Promise<number> {   // precisa ser do tipo Promise<alguma coisa>
    return 90124
}

// AWAIT: esperando sem travar a fila
async function exibir():Promise<void> {
    const nome = await buscarNome()
    console.log(nome)
}

exibir()
