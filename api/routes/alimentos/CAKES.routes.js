module.exports = api =>{
    const cake = require("../../controllers/alimentos/CAKES.controller")
        var router = require("express").Router()

    router.post("/", cake.create)

    router.get("/", cake.findAll)
    router.get("/premium", cake.findAllPremium)
    router.get("/:id", cake.findOne)

    router.put("/:id", cake.update)

    router.delete("/:id", cake.delete)
    router.delete("/", cake.deleteAll)

    api.use("/api/cake", router)
}