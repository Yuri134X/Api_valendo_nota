module.exports = api =>{
    const geladinho = require("../controllers/item.controller")
        var router = require("express").Router()

    router.post("/", geladinho.create)

    router.get("/", geladinho.findAll)
    router.get("/premium", geladinho.findAllPremium)
    router.get("/:id", geladinho.findOne)

    router.put("/:id", geladinho.update)

    router.delete("/:id", geladinho.delete)
    router.delete("/", geladinho.deleteAll)

    api.use("/api/geladinhos", router)
}