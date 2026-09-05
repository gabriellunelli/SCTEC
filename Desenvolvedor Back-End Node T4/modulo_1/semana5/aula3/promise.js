// Assíncronidade é basicamente como um garçom que, ao invés de receber um pedido e esperar até a cozinha terminar o prato para ele entregar, ele já vai pegando os outros pedidos e levando para a cozinha, e quando o prato estiver pronto, ele leve até a mesa.

const cafe = new Promise((resolve, reject) => {
    setTimeout(() => {
      const temLeite = false;
   
      if (temLeite) resolve("Café pronto");
      else reject("Acabou o leite");
    }, 2000);
  });

console.log(cafe)  // É síncrono então retorna "pending"

// O valor de "resolve()" chega como parâmetro para o ".then()", já o valor de reject para o catch
cafe.then((msg) => {
    console.log(msg)
}).catch((msgErro) => {
    console.log(msgErro)
}).finally(() => {
    console.log('Processo concluído')
})


// Promise.all (espera tudo terminar)
function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve('Usuários buscados')
    }, 1000);})
}

function buscarPedidos() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve('Pedidos buscados')
    }, 1000);})
}

Promise.all([buscarUsuario(), buscarPedidos()])
    .then((resolve) => {
        console.log(resolve[0])
        console.log(resolve[1])
    })
    .catch((erro) => console.log('Falhou:', erro))

// Promise.race (primeiro que terminar, dando certo ou errado)

function limite(s) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("demorou demais")
        }, s*1000);
    })
}

Promise.race([buscarDados(), limite(4)])
    .then((r) => console.log('Chegou: ', r))
    .catch((e) => console.log(e))

// Promise.allSettled
Promise.allSettled([buscarUsuario(), buscarPedidos()])
    .then((resultados) => {
        resultados.forEach((r) => {
            console.log(r.status)
        })
    })