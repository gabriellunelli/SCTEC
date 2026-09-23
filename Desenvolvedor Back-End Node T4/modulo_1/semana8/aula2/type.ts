// UNION
type Identificador = string | number  // Union

function salvar(id:Identificador) {
    // VERIFICANDO O TIPO
    if(typeof id === 'string') {
        console.log(id.toUpperCase())
    } else {
        console.log(id.toFixed(2))
    }
}

salvar('emyy')
salvar(240901)

type Status = 'inativo' | 'ativo'

const st:Status = 'inativo'


// INTERSECTION
type Contato = {
    email:string
}
type Endereço = {
    cidade:string
}

type Ficha = Contato & Endereço

const c:Ficha = {
    email: 'teste@teste.com',
    cidade:'Blumenau'
}