// fiz com i.a

function carregarProduto(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const produto = {
                id: id,
                nome: "Notebook",
                preco: 4500
            };

            resolve(produto);

        }, 2000);

    });
}

// carregarProduto(1)
// .then((produto) => {

//     try {

//         const json = JSON.stringify(produto);

//         console.log("JSON:");
//         console.log(json);

//         const objeto = JSON.parse(json);

//         console.log("Objeto novamente:");
//         console.log(objeto);

//     } catch (erro) {

//         console.log("Erro:");
//         console.log(erro);

//     }

// });

async function carregarProdutoAsync(id) {

    try {

        const produto = await carregarProduto(id);

        const json = JSON.stringify(produto);

        console.log(json);

        const objeto = JSON.parse(json);

        console.log(objeto);

    } catch (erro) {

        console.log(erro);

    }

}

carregarProdutoAsync(1);