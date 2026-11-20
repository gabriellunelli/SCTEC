import express from "express";
import type { Request, Response } from "express";
import type { Tarefa, NovaTarefa, AtualizarTarefa } from "./types/tarefa.js";


let tarefas: Tarefa[] = [
    { id: 1, titulo: "Estudar Express", concluida: false }
];
let proximoId = 2;
const NAO_ENCONTRADO = { erro: 'Tarefa não encontrada' };

// Parametros do REQUEST = Request<Params, ResBody, ReqBody, ReqQuery>

type ReqID = Request<{ id: string }>;
type ReqAtualizar = Request<{ id: string }, {}, AtualizarTarefa>;
type ReqCriar = Request<{}, {}, NovaTarefa>;
type ReqFiltro = Request<{}, {}, {}, { concluida?: string }>;


const app = express();
const PORT = 3000

app.use(express.json()) // Middleware para habilitar o parsing de JSON no corpo das requisições

// GET /tarefas?concluida=true
app.get('/tarefas', (req: ReqFiltro, res: Response<Tarefa[]>) => {
    const { concluida } = req.query; // Obtém o valor do parâmetro de consulta "concluida" (query é o último parâmetro do tipo Request)
    if (concluida === undefined) {
        return res.json(tarefas);
    }
    const filtro = concluida === 'true'; // Converte o valor do parâmetro de consulta para booleano
    res.json(tarefas.filter((tarefa) => tarefa.concluida === filtro))
})

//  GET /tarefas/:id
app.get('/tarefas/:id', (req: ReqID, res: Response) => {
    const id = Number(req.params.id); // Converte o parâmetro de rota "id" para número
    const tarefa = tarefas.find((tarefa) => tarefa.id === id); // Procura a tarefa com o ID correspondente
    if (!tarefa) {
        return res.status(404).json(NAO_ENCONTRADO); // Retorna 404 se a tarefa não for encontrada
    }
    res.json(tarefa);
})

// POST /tarefas
app.post('/tarefas', (req: ReqCriar, res: Response) => {
    const { titulo } = req.body ?? {}; // Obtém o título da tarefa do corpo da requisição
    if (!titulo) {
        return res.status(400).json({ erro: 'Título é obrigatório' }); // Retorna 400 se o título não for fornecido
    }
    const novaTarefa: Tarefa = { id: proximoId++, titulo, concluida: false };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
})

// PATCH /tarefas/:id
app.patch('/tarefas/:id', (req: ReqAtualizar, res: Response) => {
    const id = Number(req.params.id); // Converte o parâmetro de rota "id" para número
    const i = tarefas.findIndex((tarefa) => tarefa.id === id); // Procura o índice da tarefa com o ID correspondente
    const atual = tarefas[i];
    if (!atual) {
        return res.status(404).json(NAO_ENCONTRADO); // Retorna 404 se a tarefa não for encontrada
    }

    tarefas[i] = { ...atual, ...req.body, id}; // Atualiza a tarefa com os novos dados fornecidos no corpo da requisição
    res.json(tarefas[i]);
})

// DELETE /tarefas/:id
app.delete('/tarefas/:id', (req: ReqID, res: Response) => {
    const id = Number(req.params.id); // Converte o parâmetro de rota "id" para número
    if (!tarefas.some((tarefa) => tarefa.id === id)) {
        return res.status(404).json(NAO_ENCONTRADO); // Retorna 404 se a tarefa não for encontrada
    }
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id); // Remove a tarefa com o ID correspondente
    res.sendStatus(204); // Retorna 204 No Content para indicar que a exclusão foi bem-sucedida
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
