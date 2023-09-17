const {Sequelize} = require("sequelize")

module.exports = (sequelize, Sequilize) => {
    const sobremesa = sequelize.define("geladinho", {
        nome: {
            type: Sequilize.STRING
        },
        sabor: {
            type: Sequelize.STRING
        },
        preço: {
            type: Sequelize.INTEGER
        },
        quantidade: {
            type: Sequelize.FLOAT
        },
        premium: {
            type: Sequilize.BOOLEAN
        }
    })
    return sobremesa
}