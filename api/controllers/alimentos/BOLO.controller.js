const{Op} = require("sequelize")
const db = require("../../models")
const sobremesa = db.bolo

    exports.create = (req,res) => {
        if (!req.body.sabor) {
            res.status(400).send ({
                message:`o conteúdo não pode estar vazio!`
            })
            return
        }

        const bolo = {
            sabor: req.body.sabor,
            cobertura: req.body.cobertura,
            preço: req.body.preço,
            tamanho: req.body.tamanho,
            premium: req.body.premium ? req.body.premium : false
        }

        sobremesa.create(bolo)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Ocorreu um erro ao criar o Bolo`
            })
        })
    }

    exports.findAll = (req, res) => {
        const sabor = req.params.sabor
        var condition = sabor ? {sabor: {[Op.like]: `%${sabor}`}}: null

        sobremesa.findAll({ where: condition})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message:`Ocorreu um erro ao procurar por todos os bolos`
                })
            })
    }

    exports.findOne = (req, res) => {
        const id = req.params.id

        sobremesa.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `Não foi possivel procurar o bolo com id:${id}`
                })
           }
        })
        .catch(err =>{
            res.status(500).send({
                message: `Ocorreu um erro ao procurar o bolo com id:${id}`
            })
        })
    }

    exports.update = (req, res) => {
        const id = req.params.id
        
        sobremesa.update(req.body, {
                where: {id: id}
            })
                .then(num => {
                    if (num == 1) {
                        res.send({
                        message: `o bolo com o id:${id}, foi atualizado com sucesso.`
                        })
                    } else {
                        res.send({
                            message: `Não foi possivel atualizar o bolo com id:${id}`
                        })
                    }
                })
                .catch(err =>{
                    res.status(500).send({
                    message: `Ocorreu um erro ao tentar atualizar o bolo com id:${id}`  
                    })
                })
    }

    exports.delete = (req, res) => {
        const id = req.params.id

        sobremesa.destroy({
            where: {id: id}
        })
        .then(num =>{
            if (num ==1 ) {
                res.send({
                    message: `O bolo com o id:${id}, foi apagado com sucesso`
                })
            } else {
                res.send({
                    message: `Não foi possivel apagar o bolo com o id:${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Ocorreu um erro ao apagar o bolo com o id:${id}`
            })
        })
    }

    exports.deleteAll = (req, res) => {
        sobremesa.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({message: `um total de ${nums} bolos foram apagados com sucesso.`})
        })
        .catch(err => {
            res.status(500).send({
                message: `Ocorreu um erro ao apagar todos os bolos.`
            })
        })
    }

    exports.findAllPremium = (req, res) => {
        sobremesa.findAll({ where: {premium: true}})
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: `Ocorreu um erro ao tentar achar todos os bolos Premium`
            })
        })
    } 