// 1: Gerador de saudação
function criarSaudacao(unidade) {
    return (nome) => {
        console.log(`Olá ${nome}, bem-vindo à unidade ${unidade}!`)
    }
}

const sc = criarSaudacao("Blumenau")

sc("Gabriel")

// 2: Cofre com senha
function criarCofre(senha) {
    let conteudo = 1000
    const senhaCofre = senha
    return {
        guardar(valor, senha) {
            if (senha === senhaCofre) {
                 conteudo += valor
                 console.log(conteudo)
            } else {
                console.log("Acesso negado")
            }
        },
        abrir(senha) {
            if (senha === senhaCofre) {
                 console.log(conteudo)
            } else {
                console.log("Acesso negado")
            }
        }
    }
}

const criado = criarCofre(1234)
criado.guardar(100, 1234)
criado.abrir(1234)

// 3: Calculadora Curried

function aplicarTaxa(percentual) {
    return (valor) => {return valor + (valor * (percentual / 100))}
}

const taxaSul = aplicarTaxa(15)
console.log(taxaSul(100))

const taxaNorte = aplicarTaxa(30)
console.log(taxaNorte(100))

const taxaSudeste = aplicarTaxa(5)
console.log(taxaSudeste(100))

// Desafio: Sistema bancário com closure

function criarConta(titular) {
    let saldo = 0
    return {
        depositar(valor){
            if(valor < 0){
                
            }
            else{
                return saldo += valor
            }
        },
        sacar(valor){
            if(valor > saldo){
                
            }
            else{
                return saldo -= valor
            }
        },
        extrato(){
            console.log(saldo)
        }
    }
}

const conta1 = criarConta("Gabriel")
const conta2 = criarConta("Emilly")

conta1.depositar(500)
conta1.extrato()
conta1.sacar(250)
conta1.extrato()

conta2.depositar(500)
conta2.extrato()
conta2.sacar(250)
conta2.extrato()