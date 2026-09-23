// A FUNÇÃO QUE SERVE PARA UM TIPO SÓ (PROBLEMA NOS CASOS ABAIXO, MESMO CÓDIGO, TIPOS DIFERENTES)
// function primeiroNumero(lista:number[]):number {
//     return lista[0]
// }

// function primeiroTexto(lista:string[]):string {
//     return lista[0]
// }

// tipo generico
function primeiro<T>(lista:T[]):T {    // 'T' É SÓ UM NOME, PODERIA SER OUTRO
    return lista[0]
}

const n = primeiro([1, 2, 3])         //number
const s = primeiro(['a', 'b', 'c'])   //string


// EM CLASSES
class Caixa<T> {
    private conteudo:T

    constructor(valor:T) {
        this.conteudo = valor
    }

    abrir():T {
        return this.conteudo
    }
}

const cn = new Caixa<number>(10)
const cs = new Caixa<string>('oi')

console.log(cn.abrir() + 5)
console.log(cs.abrir().toUpperCase());

// MAIS DE UM TIPO NA MESMA CLASSE
class Par<A, B> {
    chave:A
    valor:B

    constructor(chave:A, valor:B) {
        this.chave = chave
        this.valor = valor
    }
}

const p = new Par<string, number>('Idade', 16)

// RESTRIÇÕES COM ESXTENDS
interface TemTamanho {
    length:number
}

function medir<T extends TemTamanho>(item:T):number {
    return item.length       //sem o extends com a interface dizendo o tipo, já barraria dentro da própria função, pois não saberia o tipo, sendo assim, .length não existe para numero
}

medir('Emilly') // ok
// medir(90124) //erro

// RESTRÇÃO POR INTERFACE
interface ComId {
    id:number
}

function exibirId<T extends ComId>(item:T):void {
    console.log(item.id)
}

exibirId({id:9, nome: 'Emilly'}) //ok
// exibirId({nome: 'Emilly'})    //erro

// EXEMPLO QUE VALERIA A PENA USAR GENERIC
interface ComIdentificador {
    id:number
}

class Repopsitory<T extends ComIdentificador> {
    private model:T

    constructor(valor:T) {
        this.model = valor
    }

    salvarNoBanco():T {
        console.log(`Salvou o id: ${this.model.id} no banco`)
        return this.model
    }
}

class Aluno {
    id:number

    constructor(id:number) {
        this.id = id
    }
}

const aluno = new Aluno(1)

const r =  new Repopsitory<Aluno>(aluno)
r.salvarNoBanco()