// 1) INTERFACE

interface Pontuavel {
    acumular(valorGasto:number):void
    resgatar(pontos:number):boolean
    consultarPontos():number
}

// 2)CLASSE TIPADA

class CartaoFidelidade implements Pontuavel {
    public readonly numero:number
    public titular:string
    protected pontos:number

    constructor(numero:number, titular:string, pontos:number = 0) {
        this.numero = numero
        this.titular = titular
        this.pontos = pontos
    }

    // EXEMPLO DE ENCAPSULAMENTO: OS PONTOS SÓ MUDAM POR MEIO DE MÉTODOS
    acumular(valorGasto: number): void {
        if (valorGasto <= 0) {
            this.registrar('Valor inválido, nada foi acumulado')
        } else {
            const ganhos = Math.floor(valorGasto / 10)
            this.pontos += ganhos
            this.registrar(`+${ganhos} pontos. (Compra de R$${valorGasto})`)
        }
    }

    resgatar(pontos: number): boolean {
        if (pontos > this.pontos) {
            this.registrar(`Resgate de ${pontos} pontos negado: há apenas ${this.pontos} pontos na conta.`)
            return false
        } else {
            this.pontos -= pontos
            this.registrar(`-${pontos} pontos regatados`)
            return true
        }
    }

    consultarPontos(): number {
        return this.pontos
    }

    private registrar(msg:string):void{
        console.log(`[Cartão ${this.numero} - ${this.titular}] ${msg}`)
    }
}

// 3) HERANÇA: O CARTÃO VIP HERDA TUDO E GANHA BÔNUS
class CartaoVip extends CartaoFidelidade {
    ganharBonusAniversario(){
        this.pontos += 50
        console.log(`[Cartão ${this.numero} - ${this.titular}] +50 pontos de aniversário (VIP)`)
    }
}

// EXECUÇÃO
const cartaoGabriel = new CartaoFidelidade(1001, 'Gabriel Lunelli')
const cartaoEmilly = new CartaoVip(1000, 'Emilly Vitória', 50)

cartaoGabriel.acumular(100)
cartaoEmilly.ganharBonusAniversario()

const cartoes:CartaoFidelidade[] = [cartaoEmilly, cartaoGabriel]

for(const cartao of cartoes){
    console.log(`${cartao.numero} | ${cartao.titular} | ${cartao.consultarPontos()} pontos`)
}