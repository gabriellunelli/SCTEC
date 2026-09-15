interface Produto {
    readonly id: number;   //faz com que não possa ser alterado
    nome: string;
    preco: number;
    emEstoque: boolean,
    descricao?: string     //opcional
}

const teclado: Produto = {
    id: 1,
    nome: 'Teclado mecânico',
    preco: 130,
    emEstoque: true
}

const mouse: Produto = {
    id: 2,
    nome: 'Mouse',
    preco: 70,
    emEstoque: true
}

function exibirProduto(p:Produto): void {
    console.log(`${p.nome} - ${p.preco}`)
}

exibirProduto(teclado)

// CONTRATO EM RETORNO
function criarProduto(nome:string, preco:number):Produto {
    return {
        id: 10,
        nome: nome,
        preco: preco,
        emEstoque: true
    }
}

const novo = criarProduto('Headset', 100)
console.log(novo)

// TAMBÉM EM ARRAYS
const listaProdutos: Produto[] = [teclado, novo]
console.log(listaProdutos)

// HERANÇA
interface Pessoa {
    nome: string,
    idade: number
}

interface Funcionario extends Pessoa {
    salario: number
}

const f: Funcionario = {nome:'gabriel', idade:16, salario:1000}
console.log(f)

// EXTENDENDO MAIS DE UMA INTERFACE

interface Contato {
    email: string
    telefone?: string
}

interface Endereco {
    endereco: string
}

interface ClienteCompleto extends Pessoa, Contato, Endereco {}

function exibirDadosCompletos(dados:ClienteCompleto):void {
    console.log(dados)
}

// INTERFACE DE FUNÇÕES

interface Calculadora {
    somar(a:number, b:number):number
}

const calc: Calculadora = {
    somar:(a, b) => a + b
}