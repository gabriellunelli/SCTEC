// TUDO DENTRO DA CLASSE É TIPADO

class Conta {

    // PROPRIEDADES
    private titular: string   //PRIVATE(ACESSO APENAS DENTRO DA CLASSE)
    private saldo: number

    constructor(titular: string, saldo: number = 0) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor: number):void {
        if (valor > 0) {
            this.saldo += valor
        } else {
            console.log('Não permitido')
        }
    }

    consultarSaldo():void {
        console.log(`Seu saldo é de R$${this.saldo}`)
    }
}

const conta = new Conta('Gabriel')
conta.consultarSaldo()
conta.depositar(500)
conta.consultarSaldo()


// PROTECTED (DEIXA QUE A CLASSE FILHA ALTERE)

class Conta2 {
    protected saldo: number = 0
}

class Conta2Poupanca extends Conta2 {
    renderJuros(taxa:number):void {
        this.saldo = this.saldo * (1 + taxa)
    }
}

const cp = new Conta2Poupanca
cp.renderJuros(5)
// cp.saldo = 10 // erro

// READONLY EM CLASSES (permite ver mas não alterar)

class Conta3 {
    public readonly user: string

    constructor(user:string) {
        this.user = user
    }
}

const user = new Conta3('Gabriel')
console.log(user.user)
// user.user = 'Emilly'  // erro

// IMPLEMENTS (OBRIGA A CLASSE A TER TUDO QUE A INTERFACE DECLAROU)
interface Movimentavel {
    depositar(valor:number):void
    consultarSaldo():number
}

class Banco implements Movimentavel {
    private saldo:number = 0

    depositar(valor:number):void {
        this.saldo += valor
    }

    consultarSaldo():number {
        return this.saldo
    }
}