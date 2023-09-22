module.exports = api =>{
    const chef = require("../../controllers/funcionarios/CHEFS.controller")
        var router = require("express").Router()

    router.post("/register", chef.registerCook)

    router.get("/find/all", chef.findAllCooks)
    router.get("/find/graduated", chef.findCooksGraduates)
    router.get("/find/:id", chef.findOneCook)

    router.put("/update/:id", chef.updateCook)

    router.delete("/delete/:id", chef.deleteCook)
    router.delete("/deleteAll", chef.deleteAllCooks)

    api.use("/api/chef", router)
}