class Carro {
    constructor(modelo, dono) {
        this.modelo = modelo
        this.dono = dono
        this.km = 0
        this.oleoSujo = false
    }

    rodar(km){
        this.km += km
        if (km > 300000) {
            this.oleoSujo = true
        } 
    }

    info(){
        const estadoOleo = this.oleoSujo ? 'Precisa Trocar':'Ok'

        return `Modelo: ${this.modelo}. Dono: ${this.dono} - ${this.km}km - Óleo: ${estadoOleo}`
    }
}

module.exports = Carro

