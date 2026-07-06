import { Request, Response } from "express";
import userModel from "../Model/usersModel";
import { IUsers } from "../Model/users";
import { where } from "sequelize";

function login(req: Request, res: Response, next: any){
    res.render("login")
}

async function checkLogin(req: Request, res: Response, next: any){
    const login = req.body as IUsers;
    
    try {

    let logado = await userModel.findOne({
        where: {
            user: login.user,
            password: login.password
        }
    })
        
    if (logado != null){
        // OK
        res.redirect("/clientes");
    }
    else {
        // NOT OK
        // alert("Login inválido!")
        throw new Error ("Login inválido!");
    }
    } catch (erro) {
        console.log(erro);
        res.status(500).end();
    }
    
    
}

export default {login, checkLogin};