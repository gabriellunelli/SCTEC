function media(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

const media_final = media(9, 8); 
console.log(`A média das notas é ${media_final}`);

function calcularDesconto(valorCompra){
    if (valorCompra > 500){
        console.log('20%');
        return;
    }
        
    if (valorCompra > 200){
        console.log('10%')
        return;
    }

    else {
        console.log('Sem desconto')
        return;
    }
}

calcularDesconto(199)