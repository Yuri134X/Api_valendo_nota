module.exports = api =>{
    const ice = require("../../controllers/alimentos/ICE_CREAMS.controller")
        var router = require("express").Router()

    router.post("/register", ice.regiterIce)

    router.get("/find/all", ice.findAllIces)
    router.get("/find/premium", ice.findIcePremium)
    router.get("/find/:id", ice.findOneIce)

    router.put("/update/:id", ice.updateIce)

    router.delete("/delete/:id", ice.deleteIce)
    router.delete("/deleteAll", ice.deleteAllIces)

    api.use("/api/ice", router)
}