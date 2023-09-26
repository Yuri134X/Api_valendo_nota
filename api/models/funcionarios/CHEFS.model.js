const {Sequelize} = require("sequelize")

module.exports = (sequelize, Sequilize) => {
    const Chef = sequelize.define("chefs",{
        name: {
            type: Sequilize.STRING,
            validate: {
                len: [1,100],
                notEmpty: true
                }
        },
        phone: {
            type: Sequelize.INTEGER,
            validate: {
                isNumeric: true,  
                min: 1,
                notEmpty: true
                }
        },
        salary: {
            type: Sequelize.FLOAT,
            validate: {
                isFloat: true,
                min: 1.0,
                notEmpty: true
                }
        },
        address: {
            type: Sequelize.STRING,
            validate: {
                len: [5,100],
                notEmpty: true
                }
        },
        graduated: {
            type: Sequilize.BOOLEAN
        }
    })
    return Chef
}