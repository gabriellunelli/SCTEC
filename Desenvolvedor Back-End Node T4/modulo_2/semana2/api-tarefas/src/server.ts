import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = 3000

app.use(express.json()) // Middleware para habilitar o parsing de JSON no corpo das requisições

app.get("/tarefas", (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        api: 'tarefas'
    })
})

app.post("/tarefas", (req: Request, res: Response) => {
    const id = Number(req.body.id);
    const name:string = req.body.name;

    res.status(201).json({
        message: 'tarefa criada com sucesso',
        data : { id, name }
    })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
