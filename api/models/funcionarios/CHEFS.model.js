const {Sequelize} = require("sequelize")

module.exports = (sequelize, Sequilize) => {
    const chef = sequelize.define("chef",{
        name: {
            type: Sequilize.STRING
        },
        phone: {
            type: Sequelize.INTEGER
        },
        salary: {
            type: Sequelize.FLOAT
        },
        address: {
            type: Sequelize.STRING
        },
        graduated: {
            type: Sequilize.BOOLEAN
        }
    })
    return chef
}