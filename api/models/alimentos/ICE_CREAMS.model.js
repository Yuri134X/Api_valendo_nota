const {Sequelize} = require("sequelize")

module.exports = (sequelize, Sequilize) => {
    const ice = sequelize.define("iceCream", {
        taste: {
            type: Sequelize.STRING
        },
        coverage: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.FLOAT
        },
        weight: {
            type: Sequelize.INTEGER
        },
        premium: {
            type: Sequilize.BOOLEAN
        }
    })
    return ice
}