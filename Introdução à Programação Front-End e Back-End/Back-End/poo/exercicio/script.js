class Produto {
    constructor (nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    mostrarDetalhes()
    {
        console.log(`O nome do produto é ${this.nome}, e o preço é ${this.preco} reais.`);
    }
}

const novoProduto = new Produto ("Bolacha", "3,99");
novoProduto.mostrarDetalhes();

class Eletronico extends Produto {
    constructor (nome, preco, garantia){
        super(nome, preco);
        this.garantia = garantia;
    }

    mostrarDetalhes(){
        console.log(`O nome do produto é ${this.nome}, e o preço é ${this.preco} reais, e a garantia é de ${this.garantia} dias!`);
    }
}

const novoEletronico = new Eletronico ("Notebook", "2.000", 90);
novoEletronico.mostrarDetalhes();