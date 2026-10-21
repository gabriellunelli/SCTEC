// 1: Strategy
interface Frete {
    calcular():number
}

class FreteNormal implements Frete {
    calcular(): number {
        return 10
    }
}

class FreteExpresso implements Frete {
    calcular(): number {
        return 25
    }
}

class RetiradaNaLoja implements Frete {
    calcular(): number {
        return 0
    }
}

class Compra {
    valor:number
    frete:Frete

    constructor (valor:number, frete:Frete) {
        this.valor = valor
        this.frete = frete
    }

    calcularTotal():number {
        return this.valor + this.frete.calcular()
    }
}



const retirada = new Compra(20, new RetiradaNaLoja)

const normal = new Compra(20, new FreteNormal)

const expresso = new Compra(20, new FreteExpresso)

// console.log(retirada.calcularTotal())

// console.log(normal.calcularTotal())

// console.log(expresso.calcularTotal())




// 2: Observer (Não completo)
interface Inscrito {
    avisar(titulo:string):void
}

class Canal {
    inscrever(){

    }

    publicar(){
        
    }
}