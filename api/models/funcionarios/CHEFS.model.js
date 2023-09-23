const {Sequelize} = require("sequelize")

module.exports = (sequelize, Sequilize) => {
    const Chef = sequelize.define("chefs",{
        name: {
            type: Sequilize.STRING,
            validate: {
                len: [1,100],
                allowNull:false,
                notEmpty: true
                }
        },
        phone: {
            type: Sequelize.INTEGER,
            validate: {
                isFloat: true, 
                isNumeric: true,  
                min: 1,
                allowNull:false,
                notEmpty: true
                }
        },
        salary: {
            type: Sequelize.FLOAT,
            validate: {
                isFloat: true,
                min: 1.0,
                allowNull:false,
                notEmpty: true
                }
        },
        address: {
            type: Sequelize.STRING,
            validate: {
                len: [5,100],
                allowNull:false,
                notEmpty: true
                }
        },
        graduated: {
            type: Sequilize.BOOLEAN
        }
    })
    return Chef
}