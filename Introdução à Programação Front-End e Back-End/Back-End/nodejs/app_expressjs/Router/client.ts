import { Router } from "express";
import clientController from "../Controller/clientController";

const router = Router();

router.get("/clientes/", clientController.index )
router.get("/clientes/:id", clientController.show )

router.get("/clientes/create", clientController.create)
router.post("/clientes/create", clientController.store)

router.get("/clientes/edit/:id", clientController.edit )
router.post("/clientes/edit/:id", clientController.update )

router.get("/clientes/del/:id", clientController.del )

router.get("/clientes/trabalheconosco", (req, res) =>(
    res.send("Opções de carreira")
))

router.get("/clientes/contato", clientController.contato )

router.get("/clientes/conteudo-ti", (req, res) =>(
    res.send("Coonteúdo de tecnologia aqui")
))

router.get("/clientes/backend", (req, res) =>(
    res.send("Sobre Back-End aqui")
))

router.get("/clientes/frontend", (req, res) =>(
    res.send("Sobre Front-End aqui")
))

router.get("/clientes/meugit", (req, res) =>(
    res.send('<a href="https://github.com/gabriellunelli">Meu GitHub</a>')
))

export default router;