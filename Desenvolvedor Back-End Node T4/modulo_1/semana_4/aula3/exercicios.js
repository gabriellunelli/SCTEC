console.log("\n")
// 1:
const vendas = [
    {
        nome: "produto1",
        vendasValor: 3000
    },
    {
        nome: "produto2",
        vendasValor: 4700
    },
    {
        nome: "produto3",
        vendasValor: 2150
    },
    {
        nome: "produto4",
        vendasValor: 3950
    }
]

const totalVendas = vendas.reduce((total, v) => total + v.vendasValor, 0)
console.log("Valor total de vendas de todos os produtos: ", totalVendas)

console.log("================\n")
// 2:
const filmes = [
    {
        titulo: "Toy Story",
        genero: "animação"
    },
    {
        titulo: "Toy Story 2",
        genero: "animação"
    },
    {
        titulo: "Toy Story 3",
        genero: "animação"
    },
    {
        titulo: "Interestelar",
        genero: "Suspense"
    },
    {
        titulo: "Toy Story 4",
        genero: "animação"
    }
]

const buscarFilme = filmes.find(f => f.titulo === "Interestelar")
console.log("Filme achado: ", buscarFilme)

console.log("================\n")
// 3
const funcionarios = [
    {
        nome: "Gabriel",
        setor: "TI"
    },
    {
        nome: "Emilly",
        setor: "No meu Coração"
    },
    {
        nome: "Oswaldo",
        setor: "TI"
    },
    {
        nome: "Robert",
        setor: "Marketing"
    }
]

const funcionariosTI = funcionarios.filter(f => f.setor === "TI")
console.log("Funcionários do setor de TI: ", funcionariosTI)

console.log("================\n")
// 4
const alunos = [
    {
        nome: "Gabriel",
        nota: 8
    },
    {
        nome: "Emilly",
        nota: 10
    },
    {
        nome: "Oswaldo",
        nota: 9
    },
    {
        nome: "Robert",
        nota: 7.5
    }
]

const mediaNotas = alunos.reduce((total, n) => total + n.nota / alunos.length, 0)
console.log("Média das notas da turma: ", mediaNotas)