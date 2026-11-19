export interface Tarefa {
    id: number;
    titulo: string;
    concluida: boolean;
}

export type NovaTarefa = Pick<Tarefa, 'titulo'> // Pick é um tipo utilitário do TypeScript que cria um novo tipo a partir de outro, selecionando apenas as propriedades especificadas. Neste caso, estamos criando um tipo NovaTarefa que contém apenas a propriedade 'titulo' da interface Tarefa.

export type AtualizarTarefa = Partial<Omit<Tarefa, 'id'>> // Omit é outro tipo utilitário do TypeScript que cria um novo tipo a partir de outro, omitindo as propriedades especificadas. Neste caso, estamos criando um tipo AtualizarTarefa que contém todas as propriedades da interface Tarefa, exceto 'id'. Em seguida, usamos Partial para tornar todas as propriedades opcionais, permitindo que apenas algumas delas sejam atualizadas.