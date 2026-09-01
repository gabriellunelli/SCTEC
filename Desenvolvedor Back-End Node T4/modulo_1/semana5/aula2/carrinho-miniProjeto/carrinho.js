function criarCarrinho() {
    const itens = [];

    return {
        // 1. total() somando preco * qtd
        total() {
            return itens.preco * itens.qtd
        },
        // 2. adicionar(nome, preco, qtd)
        adicionar(nome, preco, qtd) {
            return itens.push({nome: nome, preco: preco, qtd: qtd})
        },
        // 3. remover(nome)
        remover(nome) {
            const itemARemover = itens.find(item => item === nome)
            return itens.pop(itemARemover)
        },
        // 4. resumo() com o texto final
        resumo() {
            return console.log(`Valor total de ${this.total()}`)
        }
    }
    
  }

const carrinho = criarCarrinho()

carrinho.adicionar("Geladeira", 2500, 1)
carrinho.resumo()
carrinho.adicionar("Celular", 1500, 2)
carrinho.resumo()
carrinho.remover("Geladeira")
carrinho.resumo()
   
const aplicarCupom = (pct) => (valor) => {return valor * (pct / 100)}
    // 5. devolva o valor com desconto
  