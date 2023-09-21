module.exports = api =>{
    const chef = require("../../controllers/funcionarios/CHEFS.controller")
        var router = require("express").Router()

    router.post("/", chef.create)

    router.get("/", chef.findAll)
    router.get("/premium", chef.findAllPremium)
    router.get("/:id", chef.findOne)

    router.put("/:id", chef.update)

    router.delete("/:id", chef.delete)
    router.delete("/", chef.deleteAll)

    api.use("/api/chef", router)
}