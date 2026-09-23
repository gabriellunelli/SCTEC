import { Aluguel } from "./Aluguel";
import { AluguelBike } from "./aluguelBike";
import { alugueisDoDia } from "./alugueisDoDia";
import { arredondar, formatarReal } from "./formatacao";
import { exibirCabecalho, exibirLinha, exibirRodape, exibirTitulo } from "./relatorio";

exibirCabecalho('Mobi Ponto - Tarifas de hoje')
console.log(` Desbloqueio (qualquer veículo): ${formatarReal(Aluguel.TAXA_DE_DESBLOQUEIO)}`)
console.log(` Bicicleta: ${formatarReal(AluguelBike.PRECO_POR_MINUTO)} por minuto ${AluguelBike.MINUTOS_LIVRES} minutos livres \n`);

exibirCabecalho('Mobi Ponto - Fechamento do dia')

let totalDoDia:number = 0

for (const aluguel of alugueisDoDia) {
    exibirLinha(aluguel)
    totalDoDia = arredondar(totalDoDia + aluguel.calcularValor())
}

exibirRodape(alugueisDoDia.length, totalDoDia)

exibirTitulo(`Corridas acima de ${Aluguel.LIMITE_DE_MINUTOS} minutos`)

for (const aluguel of alugueisDoDia) {
    if (Aluguel.ehLongo(aluguel.minutos)){
        console.log(` ${aluguel.codigo} ${aluguel.usuario} ${aluguel.minutos}min`);
    }
}
console.log('')

exibirTitulo('Contador da estação')

Aluguel.exibirTotal()

const atrasada:AluguelBike = new AluguelBike('MP-1003', 'Robert', 6, true)
console.log(` Entrou agora: ${atrasada.codigo} por ${formatarReal(atrasada.calcularValor())}`)

Aluguel.exibirTotal()
console.log('')