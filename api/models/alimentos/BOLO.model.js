const {Sequelize} = require("sequelize")

module.exports = (sequelize, Sequilize) => {
    const Sobremesa = sequelize.define("bolo",{
        sabor: {
            type: Sequilize.STRING
        },
        cobertura: {
            type: Sequelize.STRING
        },
        preço: {
            type: Sequelize.FLOAT
        },
        tamanho: {
            type: Sequelize.INTEGER
        },
        premium: {
            type: Sequilize.BOOLEAN
        }
    })
    return Sobremesa
}