interface Pet {
    readonly id: number,
    nome: string,
    especie: string,
    idade: number,
    raca?: string
}

interface Pessoa {
    nome: string,
    cpf: string
}

interface Veterinario extends Pessoa {
    crmv: string,
    especialidade: string
}

interface Contato {
    telefone: string,
    email: string
}

interface Tutor extends Pessoa, Contato {}

interface Servico {
    nome: string,
    calcularPreco(pet:Pet):number
}

interface Atendimento {
    readonly codigo: number,
    pet: Pet,
    tutor: Tutor,
    veterinario: Veterinario,
    servicos: Servico[]
}

// Dados

const drJoao:Veterinario = {
    nome:'João',
    cpf:'111.111.111-11',
    crmv:'SC-1234',
    especialidade:'Clínica geral'
}

const oswaldo: Tutor = {
    nome:'Oswaldo',
    cpf:'121.111.111-11',
    telefone:'(47) 99999-9999',
    email:'oswaldo@gmail.com'
}

const robert: Tutor = {
    nome:'Robert',
    cpf:'123.111.111-11',
    telefone:'(47) 98888-9999',
    email:'robert@gmail.com'
}

const rex: Pet = {
    id: 1,
    nome: 'Rex',
    especie: 'Cachorro',
    idade: 3,
    raca: 'Vira-lata'
}

const thor: Pet = {
    id: 2,
    nome: 'Thor',
    especie: 'Gato',
    idade: 2,
}

const banho: Servico = {
    nome: 'Banho',
    calcularPreco:(pet) => (pet.especie === 'Cachorro' ? 60 : 45)
}

const consulta: Servico = {
    nome: 'Consulta',
    calcularPreco:(pet) => (pet.idade >= 8 ?150:120)
}

// Funcoes

function apresentar(pessoa:Pessoa):void {
    console.log(`${pessoa.nome} - CPF: ${pessoa.cpf}`)
}

let proximoCodigo = 1001

function abrirAtendimento(pet:Pet, tutor:Tutor, vet:Veterinario, servicos:Servico[]):Atendimento {
    const atendimento: Atendimento = {
        codigo: proximoCodigo,
        pet: pet,
        tutor: tutor,
        veterinario: vet,
        servicos: servicos
    }

    proximoCodigo++
    return atendimento
}

function calcularTotal(atendimento:Atendimento):number {
    let total = 0 
    for (const servico of atendimento.servicos) {
        total += servico.calcularPreco(atendimento.pet)
    }
    return total
}

function exibirAtendimento(atendimento:Atendimento){
    if (atendimento.pet.raca) {
        atendimento.pet.raca
    } else {
        atendimento.pet.raca = 'SRD'
    }

    console.log(`#${atendimento.codigo} - ${atendimento.pet.nome} (${atendimento.pet.raca}) | ${atendimento.tutor.nome} | ${atendimento.veterinario.nome}`)

    console.log(`===Serviços realizados===`)
    for (const servico of atendimento.servicos) {
        console.log(`   -${servico.nome} - Valor: ${servico.calcularPreco(atendimento.pet)}`)
    }
    console.log(`\n   Total: R$ ${calcularTotal(atendimento).toFixed(2)}`)
}

console.log('====Pessoas====')
apresentar(drJoao)
apresentar(oswaldo)
apresentar(robert)

const atendimentos: Atendimento[] = [
    abrirAtendimento(rex, oswaldo, drJoao, [banho, consulta]),
    abrirAtendimento(thor, robert, drJoao, [banho])
]

console.log('==Atendimentos do dia==')
for (const atendimento of atendimentos) {
    exibirAtendimento(atendimento)
}