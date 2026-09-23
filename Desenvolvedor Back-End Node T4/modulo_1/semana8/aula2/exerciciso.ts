// 1:
type Situacao = 'novo' | 'enviado' | 'entregue'

const situacao:Situacao = 'novo'
// const situacaoErrada:Situacao = 'cancelado'     //erro

// 2:
function exibirNota(nota:number | string):void {
    if (typeof nota === 'number') {
        console.log(nota.toFixed(2))
    } else {
        console.log(nota.toUpperCase())
    }
}

// 3:
function ultimo<T>(lista:T[]):T {
    return lista[0]
}

const numeros = ultimo<number>([1, 2, 3])
const letras = ultimo<string>(['a', 'b', 'c'])

// 4:
interface ComId {
    id:number
}

class Cadastro<T extends ComId> {
    private itens:T[]

    constructor(itens:T[]) {
        this.itens = itens
    }

    adicionar(item:T){
        this.itens.push(item)
    }

    buscar(id:number) {
        if (id in this.itens) {
            return this.itens
        }
    }
}

// const produtos = new Cadastro<ComId>([1, 2])

// Não consegui realizar este