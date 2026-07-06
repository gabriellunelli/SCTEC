import express from "express";
import clientsRouter from "./Router/client";
import usersRouter from "./Router/user"
import db from "./db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(usersRouter);
app.use(clientsRouter);
app.set("view engine", "pug");
app.set("views", "./View");

db.sync().then(() => {
    console.log("Conectado com o banco: " + process.env.DB_NAME);
}).then(() => {
    app.listen(process.env.PORT, () => {
    console.log("Servidor criado...");
    })
})

