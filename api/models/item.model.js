const sequelize = require("sequelize")
const {Sequelize} = require("sequelize")
const { Sequilize } = require(".")

module.exports = (sequelize, sequelize) => {
    const Item = sequelize.define("items", {
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
            type: Sequelize.BOOLEAN
        }
    })
    return Item
}