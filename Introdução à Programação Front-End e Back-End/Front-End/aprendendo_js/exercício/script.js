function calcularDesconto() 
{
    let produto = document.getElementById("preco").value;

    let desconto = document.getElementById("desconto").value;

    console.log("O valor do produto originalmente é: ", produto, " e o valor do desconto é de: %", desconto)

    let desconto_em_valor = (produto * desconto) / 100

    let resultado = produto - desconto_em_valor

    console.log(resultado)

    let valor_final = document.getElementById("resultado").innerHTML = resultado;
}