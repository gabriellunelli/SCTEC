class Pessoa {
    nome:string
    cpf:string

    constructor(nome:string, cpf:string){
        this.nome = nome
        this.cpf = cpf
    }

    apresentar():void {
        console.log(`Olá, me chamo ${this.nome}`)
    }
}

class Aluno extends Pessoa {
    matricula:number
    
    constructor(nome:string, cpf:string, matricula:number) {
        super(nome, cpf)
        this.matricula = matricula 
    }
}

class Professor extends Pessoa {
    disciplina:string
    
    constructor(nome:string, cpf:string, disciplina:string) {
        super(nome, cpf)
        this.disciplina = disciplina 
    }

    override apresentar():void {
        console.log(`Olá classe, sou o professor de ${this.disciplina} e me chamo ${this.nome}`)
    }
}

const aluno = new Aluno('Gabriel', '111.111.111-11', 90124)
const professor = new Professor('Robert', '222.222.222-22', 'TypeScript')
aluno.apresentar()
professor.apresentar()