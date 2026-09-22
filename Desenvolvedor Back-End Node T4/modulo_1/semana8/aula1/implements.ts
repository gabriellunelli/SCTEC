interface  Identificavel {
    cpf: string
    exibirDocumento(): string
}

class Pessoa2 implements Identificavel {
    nome:string
    cpf:string

    constructor(nome:string, cpf:string) {
        this.nome = nome
        this.cpf = cpf
    }

    exibirDocumento(): string {
        return `CPF: ${this.cpf}`
    }
}