module.exports = api =>{
    const cake = require("../../controllers/alimentos/CAKES.controller")
        var router = require("express").Router()

    router.post("/register", cake.registerCake)

    router.get("/find/all", cake.findAllCakes)
    router.get("/find/premium", cake.findCakesPremium)
    router.get("/find/:id", cake.findOneCake)

    router.put("/update/:id", cake.updateCake)

    router.delete("delete/:id", cake.deleteCake)
    router.delete("deleteAll", cake.deleteAllCakes)

    api.use("/api/cake", router)
}