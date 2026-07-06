import { Request, Response } from "express";
import clientModel from "../Model/clientModel";
import { IClients } from "../Model/clients";
import { where } from "sequelize";

async function index(req: Request, res: Response, next: any){
    // res.render("index")
    const clients = await clientModel.findAll();
    res.json(clients)
}

async function show(req: Request, res: Response, next: any){
    const id = Number(req.params.id);

    
    const clients = await clientModel.findByPk(id);
    res.json(clients)
}

async function edit(req: Request, res: Response, next: any){
    const id = Number(req.params.id);

    
    const clients = await clientModel.findByPk(id);
    res.render("edit", {clients: clients});
}

async function update(req: Request, res: Response, next: any){
    await clientModel.update(
        req.body as IClients,
        {
            where: {
                id: Number(req.params.id)
            }
        }
    );

    res.redirect("/");
}

async function del(req: Request, res: Response, next: any){
    await clientModel.destroy(
    {
        where: {
            id: req.params.id
        }
    }
    )

    res.redirect("/");
}

function create(req: Request, res: Response, next: any) {
    res.render("create")
}

async function store(req: Request, res: Response, next: any){

    console.log("Entrou no store");


    let client = req.body as IClients;

    await clientModel.create({...client});

    res.redirect("/");
}

function contato(req: Request, res: Response, next: any){
    res.render("contato")
}


export default {index, contato, create, store, show, edit, update, del};