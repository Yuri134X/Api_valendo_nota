module.exports = api =>{
    const geladinho = require("../controllers/item.controller")
        var router = require("express").Router()

    router.post("/", geladinho.criar)

    router.get("/", geladinho.acheTodos)
    router.get("/premium", geladinho.acheTodosOsPremium)
    router.get("/:id", geladinho.acheUm)

    router.put("/:id", geladinho.atualizar)

    router.delete("/:id", geladinho.deletar)
    router.delete("/", geladinho.deletarTodos)

    api.use("/api/geladinhos", router)
}