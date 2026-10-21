// 1:
// function precoComDescontoAVista(precoOriginal:number) {
//     return precoOriginal = precoOriginal - (precoOriginal * 0.10)
// }

// function precoComDescontoEstudante(precoOriginal:number) {
//     return precoOriginal = precoOriginal - (precoOriginal * 0.10) - 5
// }

function dezPorcentoDesconto(precoOriginal:number) {
    return precoOriginal = precoOriginal - (precoOriginal * 0.10)
}

function precoComDescontoAVista(precoOriginal:number) {
    return precoOriginal = dezPorcentoDesconto(precoOriginal)
}

function precoComDescontoEstudante(precoOriginal:number) {
    return precoOriginal = dezPorcentoDesconto(precoOriginal) - 5
}


// 2:
function dividirConta(total:number, pessoas:number) {
    if (pessoas > 0) {
        return total / pessoas    
    }
    throw new Error(`O valor recebido para o número de pessoas é inválido: ${pessoas}`)
}

try {
    dividirConta(0, -2)
} catch (error) {
    console.log(`| ERRO | Houve um problema ao realizar a divisão da conta:\n ${error}`)
}


// 3:
// interface Veiculo {
//     calcularDiaria(tipo:string):number,
// }


// 4:
interface Notificador {
    enviar(mensagem:string):void
}


class ServicoDeSms {
    dispararSms(telefone:string, texto:string):void{
        console.log(texto)
    }
}

class SmsAdapter implements Notificador{
    private telefone:string

    constructor(telefone:string) {
        this.telefone = telefone
    }

    enviar(mensagem:string):void{
        try {
            console.log(mensagem)
        } catch (error) {
            console.log(`Houve um erro ao tentar enviar a mensagem: ${error}`)
        }
         
    }
}