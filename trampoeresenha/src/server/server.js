require("dotenv").config
const express = require("express");
const cors = require("cors")
const mysql = require("mysql2")

const app = express();
app.use(cors());
app.use(express.json());


const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "resenha_trampo",
})


database.connect(err =>{
    if(err){
        console.error("Erro ao conectar no banco:", err);
        return
    }

    console.log("Conectado ao banco MySQL!")
})


app.post("/usuarios", (req, res) =>{
    const {nome, email, senha} = req.body;
    const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";

    database.query(sql, [nome, email, senha],(err, result) => {
        if (err){
            console.log("Erro ao iserir usuario: ", err);
            res.status(500).json({error: "Erro ao iseriri usuario"})
        } else {
            res.status(201).json({message: "Usuário cadastrado com sucesso!"})
        }
    });
});

app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});