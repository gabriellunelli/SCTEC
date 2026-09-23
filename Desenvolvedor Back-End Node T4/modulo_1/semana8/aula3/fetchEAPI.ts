// API = APLICATION PROGRAMMING INTERFACE
// ========================================

// fetch: buscando dados na internet

// json devolve any
// Solução - interface com o formato que a api devolve

interface ToDo {
    userId:number,
    id:number,
    title:number,
    completed:boolean
}

async function buscar(id:number):Promise<void> {
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`) // espera a resposta chegar
    const dado:ToDo = await resposta.json() // corpo virando objeto com '.json()'
    if(dado.completed) {
        console.log('Completado')
    } else {
        console.log('Há completar')
    }

    console.log(dado)
}

buscar(1)

// LISTA DE RESULTADOS (e try catch)
async function buscarTodos():Promise<void> {
    try {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/todos/`) // espera a resposta chegar
        const dado:ToDo[] = await resposta.json() // corpo virando objeto com '.json()'
        for (const todo of dado) {
            console.log(`${todo.title} - Concluído? : ${todo.completed ? 'Sim' : 'Não'}`)
        }
    } catch (error) {
        console.log(`Falha ao buscar dados. - Erro:\n${error}`)
    }

}

buscarTodos()