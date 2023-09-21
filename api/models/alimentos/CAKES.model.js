const {Sequelize} = require("sequelize")

module.exports = (sequelize, Sequilize) => {
    const cake = sequelize.define("CAKES",{
        taste: {
            type: Sequilize.STRING
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
    return cake
}