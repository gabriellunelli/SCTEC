"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dados
const drJoao = {
    nome: 'João',
    cpf: '111.111.111-11',
    crmv: 'SC-1234',
    especialidade: 'Clínica geral'
};
const oswaldo = {
    nome: 'Oswaldo',
    cpf: '121.111.111-11',
    telefone: '(47) 99999-9999',
    email: 'oswaldo@gmail.com'
};
const robert = {
    nome: 'Robert',
    cpf: '123.111.111-11',
    telefone: '(47) 98888-9999',
    email: 'robert@gmail.com'
};
const rex = {
    id: 1,
    nome: 'Rex',
    especie: 'Cachorro',
    idade: 3,
    raca: 'Vira-lata'
};
const thor = {
    id: 2,
    nome: 'Thor',
    especie: 'Gato',
    idade: 2,
};
const banho = {
    nome: 'Banho',
    calcularPreco: (pet) => (pet.especie === 'Cachorro' ? 60 : 45)
};
const consulta = {
    nome: 'Consulta',
    calcularPreco: (pet) => (pet.idade >= 8 ? 150 : 120)
};
// Funcoes
function apresentar(pessoa) {
    console.log(`${pessoa.nome} - CPF: ${pessoa.cpf}`);
}
let proximoCodigo = 1001;
function abrirAtendimento(pet, tutor, vet, servicos) {
    const atendimento = {
        codigo: proximoCodigo,
        pet: pet,
        tutor: tutor,
        veterinario: vet,
        servicos: servicos
    };
    proximoCodigo++;
    return atendimento;
}
function calcularTotal(atendimento) {
    let total = 0;
    for (const servico of atendimento.servicos) {
        total += servico.calcularPreco(atendimento.pet);
    }
    return total;
}
function exibirAtendimento(atendimento) {
    if (atendimento.pet.raca) {
        atendimento.pet.raca;
    }
    else {
        atendimento.pet.raca = 'SRD';
    }
    console.log(`#${atendimento.codigo} - ${atendimento.pet.nome} (${atendimento.pet.raca}) | ${atendimento.tutor.nome} | ${atendimento.veterinario.nome}`);
    console.log(`===Serviços realizados===`);
    for (const servico of atendimento.servicos) {
        console.log(`   -${servico.nome} - Valor: ${servico.calcularPreco(atendimento.pet)}`);
    }
    console.log(`\n   Total: R$ ${calcularTotal(atendimento).toFixed(2)}`);
}
console.log('====Pessoas====');
apresentar(drJoao);
apresentar(oswaldo);
apresentar(robert);
const atendimentos = [
    abrirAtendimento(rex, oswaldo, drJoao, [banho, consulta]),
    abrirAtendimento(thor, robert, drJoao, [banho])
];
console.log('==Atendimentos do dia==');
for (const atendimento of atendimentos) {
    exibirAtendimento(atendimento);
}
//# sourceMappingURL=index.js.map