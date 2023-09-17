module.exports = api =>{
    const bolo = require("../controllers/BOLO.controller")
        var router = require("express").Router()

    router.post("/", bolo.create)

    router.get("/", bolo.findAll)
    router.get("/premium", bolo.findAllPremium)
    router.get("/:id", bolo.findOne)

    router.put("/:id", bolo.update)

    router.delete("/:id", bolo.delete)
    router.delete("/", bolo.deleteAll)

    api.use("/api/bolo", router)
}