interface Vendavel {
    consultarPreco():number
}

class Produto implements Vendavel {
    public readonly codigo:number
    public nome:string
    private preco:number

    constructor(codigo:number, nome:string, preco:number) {
        this.codigo = codigo
        this.nome = nome
        this.preco = preco
    }

    aplicarDesconto(percentual:number):number {
        return this.preco = this.preco - (this.preco * percentual / 100)
    }

    consultarPreco():number{
        return this.preco
    }

    alterarPreco(novoValor:number):void{
        if (novoValor >= 0) {
            this.preco = novoValor
            console.log(`O preço do produto ${this.nome} foi alterado para: R$${this.preco}`)
        } else {
            console.log('Valor inválido')
        }
    }
}

const p1 = new Produto(1, 'Teclado', 100)
const p2 = new Produto(2, 'Mouse', 80)
console.log(p1, p2)
p1.aplicarDesconto(15)
console.log(p1)
p1.consultarPreco()
p1.alterarPreco(100)
p1.consultarPreco
