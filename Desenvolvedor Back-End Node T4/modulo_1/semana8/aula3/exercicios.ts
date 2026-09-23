// 1: Promise tipada
async function buscarAluno():Promise<string> {
    return 'Emilly'
}

buscarAluno().then((nome) => {
    console.log(nome)
})

// 2: async e await
async function exibirAluno():Promise<void> {
    const a = await buscarAluno()
    console.log(a.toUpperCase())
}

exibirAluno()

// 3:tipando a resposta da API
interface Aluno {
    userId:number,
    id:number,
    title:number,
    completed:boolean
}

async function listarAlunos():Promise<Aluno[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const r:Aluno[] = await response.json()
        return r
    } catch (error) {
        console.log(`Erro: ${error}`)
        return []    // não tava entendendo o erro, ate que pedi pro vscode corrigir, e vi isso e parou o erro, então só coloquei depois que o copilot tinha escrito isso(parei a execução dele)
    }

}

// 4:tsconfig e ferramentas