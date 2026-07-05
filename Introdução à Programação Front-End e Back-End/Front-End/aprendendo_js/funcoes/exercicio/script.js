// usei i.a
const input = document.getElementById("numeroPedido");
const botao = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

function clientePedido(numeroPedido) {
    if (numeroPedido === 1) {
        return "Pizza de calabresa";
    } else if (numeroPedido === 2) {
        return "Pizza de 4 queijos";
    } else if (numeroPedido === 3) {
        return "Pizza de frango com catupiry";
    } else if (numeroPedido === 4) {
        return "Pizza de brigadeiro";
    } else {
        return "Número do pedido inválido!";
    }
}

botao.addEventListener("click", function () {
    const numero = Number(input.value);
    resultado.textContent = clientePedido(numero);
});
// const numeroPedido = parseInt(document.getElementById("inputButton").addEventListener("keypress", function(event){
//     return event;
// }));

// function clientePedido (numeroPedido)
// {
//     if (numeroPedido === 1)
//     {
//         return "Pizza de calabresa"
//     }

//     else if (numeroPedido === 2)
//     {
//         return "Pizza de 4 queijos"
//     }

//     else if (numeroPedido === 3)
//     {
//         return "Pizza de frango com catupiry"
//     }

//     else if (numeroPedido === 4)
//     {
//         return "Pizza de brigadeiro"
//     }
    
//     else {
//         return "Número do pedido inválido!"
//     }
// }