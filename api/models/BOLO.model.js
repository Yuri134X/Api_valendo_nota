const {Sequelize} = require("sequelize")

module.exports = (sequelize, Sequilize) => {
    const Sobremesa = sequelize.define("bolo",{
        sabor: {
            type: Sequilize.STRING
        },
        preço: {
            type: Sequelize.FLOAT
        },
        cobertura: {
            type: Sequelize.STRING
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