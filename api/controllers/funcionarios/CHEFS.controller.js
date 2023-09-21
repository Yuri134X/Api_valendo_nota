const {Op} = require("sequelize")
const db = require("../../models")
const chef = db.chef

exports.create = (req,res) => {
    if (!req.body.phone) {
        res.status(400).send({
            message: `The content can't be empty!`
        })
        return
    }


    const chef = {
        name: req.body.name,
        phone: req.body.phone,
        salary: req.body.salary,
        address: req.body.address,
        graduated: req.body.graduated ? req.body.graduated : false
    }

  chef.create(chef)
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
        const name = req.params.name
        var condition = name ? {name: {[Op.like]: `%${name}`}}: null

        chef.findAll({ where: condition})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message:`error when searching for all cooks`
                })
            })
    }

    exports.findOne = (req, res) => {
        const id = req.params.id

        chef.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `Couldn't find cook with id:${id}`
                })
           }
        })
        .catch(err =>{
            res.status(500).send({
                message: `error when searching for cook with id:${id}`
            })
        })
    }

    exports.update = (req, res) => {
        const id = req.params.id
        
        chef.update(req.body, {
                where: {id: id}
            })
                .then(num => {
                    if (num == 1) {
                        res.send({
                        message: `the cook with id:${id}, has been successfully updated.`
                        })
                    } else {
                        res.send({
                            message: `Couldn't update cook with id:${id}`
                        })
                    }
                })
                .catch(err =>{
                    res.status(500).send({
                    message: `error trying to update cook with id:${id}`  
                    })
                })
    }

    exports.delete = (req, res) => {
        const id = req.params.id

        chef.destroy({
            where: {id: id}
        })
        .then(num =>{
            if (num ==1 ) {
                res.send({
                    message: `The cook with the id:${id}, was successfully deleted`
                })
            } else {
                res.send({
                    message: `Couldn't delete the cook with id:${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `error deleting the cook with id:${id}`
            })
        })
    }

    exports.deleteAll = (req, res) => {
        chef.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({message: `a total of ${nums} cooks were successfully deleted.`})
        })
        .catch(err => {
            res.status(500).send({
                message: `error when deleting all cooks.`
            })
        })
    }

    exports.findAllPremium = (req, res) => {
        chef.findAll({ where: {premium: true}})
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: `error trying to find all Premium Cakes`
            })
        })
    } 