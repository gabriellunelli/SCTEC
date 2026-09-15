// 1, 2, 3 & 4:
interface Publicacao {
    readonly codigo: number
    titulo: string,
    autor: string,
    disponivel: boolean,
}

interface Livro extends Publicacao{
    paginas: number,
    edicao?: number
}

interface Revista extends Publicacao{
    edicao: number
}

const l1: Livro = {codigo: 1, titulo: 'Livro 1', autor: 'Oswaldo', paginas: 100, disponivel: true}
const l2: Livro = {codigo: 2, titulo: 'Livro 2', autor: 'Robert', paginas: 200, disponivel: false}
const livroEdicao: Livro = {codigo: 3, titulo: 'Livro 3', autor: 'Banana', paginas: 150, disponivel: true, edicao: 3}
const revista: Revista = {codigo: 3, titulo: 'Revista', autor: 'Laranja', disponivel: true, edicao: 4}

l1.titulo = 'Primeiro Livro'   //FUNCIONA
// l1.codigo //NÃO FUNCIONA (READONLY)

const livros: Livro[] = [l1, l2, livroEdicao]

const exibirDadosLivro = (l: Livro) => {
    if (l.edicao) {
        console.log(`${l.titulo}, ${l.edicao}ª Edição - ${l.autor}`)
    } else {
        console.log(`${l.titulo} - ${l.autor}`)
    }
}

for (const l of livros) {
    exibirDadosLivro(l)
}

console.log(revista)