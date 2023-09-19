const {Sequelize} = require("sequelize")

module.exports = (sequelize, Sequilize) => {
    const sobremesa = sequelize.define("geladinho", {
        sabor: {
            type: Sequelize.STRING
        },
        calda: {
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
    return sobremesa
}