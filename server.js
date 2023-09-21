const express = require("express")
const cors = require("cors")
const api = express()

var corsOptions = {
    origin: "http://localhost:8081"
}

api.use(cors(corsOptions))
api.use(express.json())
api.use(express.urlencoded({extended: true}))

const db = require("./api/models")

db.sequelize.sync()
.then(() => {
    console.log("Inicialização completa, Banco Conectado!!!");
})
.catch((err) => {
    console.log("Inicialização interrompida, falha ao conectar ao banco " + err.message)
})

require("./api/routes/funcionarios/CHEFS.routes")(api)
require("./api/routes/alimentos/ICE_CREAMS.routes")(api)
require("./api/routes/alimentos/CAKES.routes")(api)

api.get("/", (req,res) => {
    res.json(`Bem vindo ao Banco`)
})

const PORT = process.env.PORT || 8080;
api.listen(PORT, () => {
    console.log(`Server funcionando na porta ${PORT}.`)
})