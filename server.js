const express = require("express")
const cors = require("cors")
const app = express()

var corsOptions = {
    origin: "http://localhost:8080"
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const db = require("./api/models")

db.sequelize.sync()
.then(() => {
    console.log("Inicialização completa, Banco Conectado!!!");
})
.catch((err) => {
    console.log("Inicialização interrompida, falha ao conectar ao banco" + err.message);
})

require("./api/routes/geladinhos.routes.js")(api)

app.get("/", (req,res) => {
    res.json(`Bem vindo ao Banco`)
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server funcionando na porta ${PORT}.`);
})