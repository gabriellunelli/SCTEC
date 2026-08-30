// 1:
const alunos = [
    {
        nome: "Emilly",
        idade: 16
    },
    {
        nome: "Gabriel",
        idade: 16
    }
]

alunos.push(
    {
        nome: "Oswaldo",
        idade: 16
    }
)

console.log(alunos)

console.log("===================")
// 2:
const produtos = [
    {
        nome: "Celular",
        preco: 1500
    },
    {
        nome: "Geladeira",
        preco: 3500
    },
    {
        nome: "Fogão",
        preco: 1900
    }
]

for(let i = 0; i < produtos.length; i++){
    console.log(`Nome: ${produtos[i].nome} com preço de: ${produtos[i].preco}`)
}

console.log("=======================")
// 3:
const filme = {
    titulo: "Toy Story",
    genero: "Animação",
    duracao: 90
}

const filmeJson = JSON.stringify(filme)
console.log(filmeJson)

console.log("================")
// 4:
const users = [
    {
        nome: "Gabriel",
        email: "gabriel@teste.com"
    },
    {
        nome: "Emilly",
        email: "emy@teste.com"
    },
    {
        nome: "Oswaldo",
        email: "oswaldo@teste.com"
    }
]

for(let i = 0; i < users.length; i++){
    console.log(`O usuário é: ${users[i].nome}, e o email do usuário é: ${users[i].email}`)
}