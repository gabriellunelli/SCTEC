const aluno = {
    nome: "Emilly",
    idade: 16,
    curso: "EM"
}

console.log('Antes: ', aluno)

// CONVERTENDO OBJETO PARA JSON
const alunoJson = JSON.stringify(aluno)
console.log(`Depois: ${alunoJson}`)

// CONVERTENDO JSON PARA OBJETO
const jsonParaObjeto = JSON.parse(alunoJson)
console.log('Convertido para objeto novamente: ', jsonParaObjeto)