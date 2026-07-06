// Executa em 3 segundos (contagem em milissegundos)
// setTimeout(() => {
//     console.log("! Alerta !");
// }, 3000);

// Executa repetidas vezes a cada 3 segundos
// setInterval(() => {
//     console.log("! Alerta !");
// }, 3000);

console.log("Início da execução.");

function buscarDadosDoServidor(){
    // CODIGO QUE BUSCA DADOS DO SERVIDOR
    return new Promise((resolve, reject) => {
        console.log("Buscando dados do servidor...");

        setTimeout(() => {
            let sucesso = Math.random() > 0.5;

            if (sucesso){
                resolve("Dados recebidos com sucesso!");
            }
            else reject("Falha ao buscar dados do servidor");
        }, 4000);
    })

    
}

buscarDadosDoServidor().then((mensagem) => {
    console.log(mensagem);
}).catch((erro) => {
    console.error(erro);
}
);

