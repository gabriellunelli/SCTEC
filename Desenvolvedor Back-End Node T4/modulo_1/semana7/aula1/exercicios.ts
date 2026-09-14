// 1:
const calcularMedia = (n1:number, n2:number):number => {
    return (n1 + n2) / 2
}

console.log(calcularMedia(8, 6))

console.log('\n')
//2:

function exibirSaudacao(nome:string):void {
    console.log(`Olá, ${nome}!`)
}

exibirSaudacao('Emilly')
exibirSaudacao('Gabriel')

console.log('\n')
//3:

const aplicarDesconto = (preco:number, percentual:number = 10):number => {
    return preco - (preco*percentual/100)
}

console.log(aplicarDesconto(100, 50))
console.log(aplicarDesconto(100))

console.log('\n')
// 4:

function cadastrarCliente(nome:string, telefone?:string):void {
    if (telefone) {
        console.log(`Nome: ${nome} - Telefone: ${telefone}`)
    }
    else {
        console.log(`Nome: ${nome} - Sem telefone`)
    }
}

cadastrarCliente('Emilly', '+55 (99) 99999-9999')
cadastrarCliente('Gabriel')