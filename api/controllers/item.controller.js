const { Op } = require("sequelize")
const db = require("../models")
const Item = db.geladinho

exports.create = (req,res) => {
    if (!req.body.nome) {
        res.status(400).send({
            message: `O conteúdo não pode estar vazio!`
        })
        return
    }

    const geladinho = {
        nome: req.body.nome,
        sabor: req.body.sabor,
        preço: req.body.preço,
        quantidade: req.body.quantidade,
        premium: req.body.premium ? req.body.premium : false      
    }

    Item.create(geladinho)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
                    err.message || `Ocorreu um erro ao tentar criar o Geladinho`
        })
    })
}

    exports.findAll = (req, res) => {
        const nome = req.params.nome
        var condition = nome ? { nome: { [Op.like]: `%${nome}`}} : null

            Item.findAll({ where: condition})
                .then(data => {
                    res.send(data)
                })
                .catch(err =>{
                    res.status(500).send({
                        message:
                            err.message || `Algum erro ocorreu ao pesquisar por todos os geladinhos`
            })
        })   
    }

    exports.findOne = (req ,res) => {
        const id = req.params.id

        Item.findByPk(id)
            .then(data => {
                if (data) {
                    res.send(data)
                } else {
                    res.status(404).send({
                        message: `Não foi possivel encontrar o geladinho com o id =(${id})`
                    })
                }
            })
            .catch(err =>{
                res.status(500).send({
                    message: `Algum erro ocorreu ao procurar o geladinho com o id =(${id})`
                })
            })
    }

    exports.update = (req, res) => {
        const id = req.params.id
        
            Item.update(req.body, {
                where: {id: id}
            })
                .then(num => {
                    if (num == 1) {
                        res.send({
                        message: `o geladinho com o id =(${id}), foi atualizado com sucesso.`
                        })
                    } else {
                        res.send({
                            message: `Não foi possivel atualizar o geladinho com id =(${id})`
                        })
                    }
                })
                .catch(err =>{
                    res.status(500).send({
                    message: `Ocorreu um erro ao tentar atualizar o geladinho com id =(${id})`  
                    })
                })
    }

    exports.delete = (req, res) => {
        const id = req.params.id

        Item.destroy({
            where: {id: id}
        })
        .then(num =>{
            if (num ==1 ) {
                res.send({
                    message: `O geladinho com o id =(${id}), foi apagado com sucesso`
                })
            } else {
                res.send({
                    message: `Não foi possivel apagar o geladinho com o id =(${id})`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Ocorreu um erro ao apagar o geladinho com o id =(${id})`
            })
        })
    }

    exports.deleteAll = (req, res) => {
        Item.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({message: `${nums} geladinhos foram apagados com sucesso.`})
        })
        .catch(err => {
            res.status(500).send({
                message: `Ocorreu um erro ao apagar todos os geladinhos.`
            })
        })
    }

    exports.findAllPremium = (req, res) => {
        Item.findAll({ where: {premium: true}})
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: `Ocorreu um erro ao tentar achar todos os geladinhos Premium`
            })
        })
    }

