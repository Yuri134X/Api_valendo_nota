const{Op} = require("sequelize")
const db = require("../../models")
const cake = db.cakes

    exports.registerCake = (req,res) => {
        if (!req.body.taste) {
            res.status(400).send ({
                message:`The content can't be empty!`
            })
            return
        }

        const Cake = {
            taste: req.body.taste,
            coverage: req.body.coverage,
            price: req.body.price,
            weight: req.body.weight,
            premium: req.body.premium ? req.body.premium : false
        }

     cake.create(Cake)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Cake registration error`
            })
        })
    }

    exports.findAllCakes = (req, res) => {
        const taste = req.params.taste
        var condition = taste ? {taste: {[Op.like]: `%${taste}`}}: null

     cake.findAll({ where: condition})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message:`Couldn't find the cake with id:${id}`
                })
            })
    }

    exports.findOneCake = (req, res) => {
        const id = req.params.id

     cake.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `Couldn't find Cake with id:${id}`
                })
           }
        })
        .catch(err =>{
            res.status(500).send({
                message: `error when searching for Cake with id:${id}`
            })
        })
    }

    exports.updateCake = (req, res) => {
        const id = req.params.id
        
     cake.update(req.body, {
                where: {id: id}
            })
                .then(num => {
                    if (num == 1) {
                        res.send({
                        message: `the Cake with id:${id}, has been successfully updated.`
                        })
                    } else {
                        res.send({
                            message: `Couldn't update cake with id:${id}`
                        })
                    }
                })
                .catch(err =>{
                    res.status(500).send({
                    message: `error trying to update  with id:${id}`  
                    })
                })
    }

    exports.deleteCake = (req, res) => {
        const id = req.params.id

     cake.destroy({
            where: {id: id}
        })
        .then(num =>{
            if (num ==1 ) {
                res.send({
                    message: `The ice cream with the id:${id}, was successfully deleted`
                })
            } else {
                res.send({
                    message: `Couldn't delete the cake with id:${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `error deleting the cake with id:${id}`
            })
        })
    }

    exports.deleteAllCakes = (req, res) => {
     cake.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({message: `a total of ${nums} cakes were successfully deleted.`})
        })
        .catch(err => {
            res.status(500).send({
                message: `error when deleting all cakes.`
            })
        })
    }

    exports.findCakesPremium = (req, res) => {
     cake.findAll({ where: {premium: true}})
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: `error trying to find all Premium Cakes`
            })
        })
    } 