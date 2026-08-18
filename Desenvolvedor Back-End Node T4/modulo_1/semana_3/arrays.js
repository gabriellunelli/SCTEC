// ARRAY (LISTA ORDENADA)
const alunos = ['Gabriel', 'Emilly', 'João', 'Pedro'];

// TAMANHO DO ARRAY
console.log(`Tamanho: ${alunos.length}`);

// ACESSAR ELEMENTO DO ARRAY
console.log(`Acessando: ${alunos[1]}`);

// ALTERAR ELEMENTO DO ARRAY
alunos[2] = 'Robert';
console.log(`Modificado: ${alunos}`);

// PUSH (adicionando elemento no fim do array)
alunos.push('Lunelli');
console.log(`Adicionado (Push): ${alunos}`)

// POP (remove elemento no fim do array)
const alunoRemovido = alunos.pop();
console.log(`Removido (Pop): ${alunoRemovido}`)

// percorrendo todos com FOR
// for(aluno in alunos){
//     console.log(aluno)          -> RETORNA O INDEX(0, 1 etc.)
// }
for(let i = 0; i < alunos.length; i++){
    console.log(`Aluno na posição ${i + 1}: ${alunos[i]}`)
}

// UNSHIFT (adiciona no começo)
alunos.unshift('Oswaldo');
console.log(`Adicionado começo (Unshift): ${alunos}`);

// SHIFT (remove no começo)
alunos.shift();
console.log(`Removendo começo (Shift): ${alunos}`);

// INDEXOF (Retorna o índice do elemento no array)
const indice = alunos.indexOf('Pedro');
console.log(`Índice do elemento 'Pedro' no array: ${indice}`)

// INCLUDES (Retorna true ou false se o elemento existe no array)
const existe = alunos.includes('Emilly');
console.log(`Emilly existe no array?: ${existe}`)


// Exercício

const filmes = ['Toy Story', 'Toy Story 2', 'Toy Story 3', 'Toy Story 4', 'Toy Story 5',]

console.log(`3° filme: ${filmes[2]}`)

filmes[2] = 'Cars'

console.log(`Atualizado: \n${filmes}`)