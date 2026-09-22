import { Aluguel } from "./Aluguel";
import { AluguelBike } from "./aluguelBike";
import { AluguelPatinete } from "./aluguelPatinete";

export const alugueisDoDia:Aluguel[] = [
    new AluguelBike('MP-1001', 'Emilly', 12, true),
    new AluguelPatinete('MP-1002', 'Gabriel', 10, 'AP-09124')
]