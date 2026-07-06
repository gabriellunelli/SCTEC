class Veiculo {
    constructor (marca, modelo, ano, tipo, qtdPortas){
        this.marca = marca; //propriedade da classe
        this.modelo = modelo; //propriedade da classe
        this.ano = ano; //propriedade da classe
        this.tipo = tipo; //propriedade da classe
        this.qtdPortas = qtdPortas; //propriedade da classe
    }

    mostrarDadosDoVeiculo()
    {
        console.log(`${this.marca} ${this.modelo}, ${this.ano} (${this.tipo}), ${this.qtdPortas} portas.`);
    }

    acelerar()
    {
        console.log("Acelerando...")
    }
}

class Moto extends Veiculo {
    constructor (marca, modelo, ano, cilindradas){
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    mostrarDadosDoVeiculo(){
        console.log(`${this.marca} ${this.modelo}, ${this.ano}, ${this.cilindradas} cilindradas.`);
    }
}

class Carro extends Veiculo{
    constructor (marca, modelo, ano, tipo, qtdPortas){
        super(marca, modelo, ano, tipo, qtdPortas)
    }
}

const meuCarro = new Carro ("Fiat", "Argo", "2022", "Hatch", 4);

meuCarro.mostrarDadosDoVeiculo();
meuCarro.acelerar();

const minhaMoto = new Moto ("Yamaha", "R1", "2010", 1000);
minhaMoto.mostrarDadosDoVeiculo();
minhaMoto.acelerar();