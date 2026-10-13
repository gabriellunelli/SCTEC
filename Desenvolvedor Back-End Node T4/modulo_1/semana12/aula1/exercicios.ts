// CLEAN CODE

// 1:
// era:
// const d = 3; const lst = [12, 30]; const ok = true; function frete(v: number).
// vira:
// const prazoEntrega = 3; const valoresPedidos = [12, 30]; const pagamentoConfirmado = true; function calcularFrete(valor: number)

// 2:
// era:
// Uma função calcula o preço do estacionamento: if (horas > 3) { valor = horas * 6; } else { valor = 15; }
// vira:
// const HORAS_DEIXADAS: number = 1
// if (HORAS_DEIXADAS > 3) { valor = HORAS_DEIXADAS * 6; } else { valor = 15; }

// 3:
// era:
// Escreva uma função fecharConta que recebe uma lista de preços, soma tudo, acrescenta 10% de serviço e mostra o total na tela.
// Enunciado
// Primeiro escreva tudo em uma função só.
// Depois divida em três funções, uma para cada tarefa.
// A fecharConta deve apenas chamar as outras.

function somar(numeros: number[]){
    let subtotal = 0
    for (const numero of numeros){
        subtotal += numero
    }

    return subtotal
}

function acrescentarServico(valorConta:number) {
    const porcentagemServico = (valorConta * 0.10)
    valorConta += porcentagemServico

    return valorConta
}

function exibirTotal(total:number) {
    console.log(`Total da conta: ${total}`)
}

function fecharConta(precos: number[]){
    const valorConta = somar(precos)

    const contaTotal = acrescentarServico(valorConta)

    exibirTotal(contaTotal)
}