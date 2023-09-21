const { Op } = require("sequelize")
const db = require("../../models")
const ice = db.ice_cream

exports.create = (req,res) => {
    if (!req.body.taste) {
        res.status(400).send({
            message: `The content can't be empty!`
        })
        return
    }

    const iceCream = {
            taste: req.body.taste,
            coverage: req.body.coverage,
            price: req.body.price,
            weight: req.body.weight,
            premium: req.body.premium ? req.body.premium : false     
    }

    ice.create(iceCream)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `error registering ice cream`
            })
        })
    }

    exports.findAll = (req, res) => {
        const taste = req.params.taste
        var condition = taste ? {taste: {[Op.like]: `%${taste}`}}: null

        ice.findAll({ where: condition})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message:`error when searching for all ice cream`
                })
            })
    }

    exports.findOne = (req, res) => {
        const id = req.params.id

        ice.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `Couldn't find the ice cream with id:${id}`
                })
           }
        })
        .catch(err =>{
            res.status(500).send({
                message: `error when searching for ice cream with id:${id}`
            })
        })
    }

    exports.update = (req, res) => {
        const id = req.params.id
        
        ice.update(req.body, {
                where: {id: id}
            })
                .then(num => {
                    if (num == 1) {
                        res.send({
                        message: `the ice cream with id:${id}, has been successfully updated.`
                        })
                    } else {
                        res.send({
                            message: `Couldn't update ice cream with id:${id}`
                        })
                    }
                })
                .catch(err =>{
                    res.status(500).send({
                    message: `error trying to update ice cream with id:${id}`  
                    })
                })
    }

    exports.delete = (req, res) => {
        const id = req.params.id

        ice.destroy({
            where: {id: id}
        })
        .then(num =>{
            if (num ==1 ) {
                res.send({
                    message: `The ice cream with the id:${id}, was successfully deleted`
                })
            } else {
                res.send({
                    message: `Couldn't delete the ice cream with id:${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `error deleting the ice cream with id:${id}`
            })
        })
    }

    exports.deleteAll = (req, res) => {
        ice.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({message: `a total of ${nums} ice creams were successfully deleted.`})
        })
        .catch(err => {
            res.status(500).send({
                message: `error when deleting all ice creams.`
            })
        })
    }

    exports.findAllPremium = (req, res) => {
        ice.findAll({ where: {premium: true}})
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: `error trying to find all Premium ice creams`
            })
        })
    } 

