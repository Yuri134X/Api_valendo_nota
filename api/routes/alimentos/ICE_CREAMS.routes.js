module.exports = api =>{
    const ice = require("../../controllers/alimentos/ICE_CREAMS.controller")
        var router = require("express").Router()

    router.post("/", ice.create)

    router.get("/", ice.findAll)
    router.get("/premium", ice.findAllPremium)
    router.get("/:id", ice.findOne)

    router.put("/:id", ice.update)

    router.delete("/:id", ice.delete)
    router.delete("/", ice.deleteAll)

    api.use("/api/ice", router)
}