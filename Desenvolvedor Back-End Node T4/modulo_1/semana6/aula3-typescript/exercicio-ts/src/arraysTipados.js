"use strict";
const notas = [7, 6, 8, 10];
const alunos = ['Gabriel', 'Oswaldo', 'Robert', 'Emilly'];
notas.push(9);
alunos.push('Teste');
for (let i = 0; i < notas.length && i < alunos.length; i++) {
    console.log(`Aluno ${alunos[i]} tirou a nota ${notas[i]}`);
}
