const {Sequelize} = require("sequelize")

module.exports = (sequelize, Sequilize) => {
    const Ice = sequelize.define("ices", {
        taste: {
            type: Sequilize.STRING,
            validate: {
            len: [1,40],
            notEmpty: true
            }
        },
        coverage: {
            type: Sequelize.STRING,
            validate: {
            len: [1,40],
            notEmpty: true
            }
        },
        price: {
            type: Sequelize.FLOAT,
            validate: {
            isFloat: true,
            min: 1.0,
            isNumeric: true,  
            notEmpty: true
            }
        },
        weight: {
            type: Sequelize.INTEGER,
            validate: {
            isNumeric: true,  
            isInt: true, 
            min: 1,
            notEmpty: true
            }
        },
        premium: {
            type: Sequilize.BOOLEAN
        },
        id_chef: {
            type: Sequelize.INTEGER,

            references: {
                model: "chefs",
                key: 'id'
            }
        }
    })
    return Ice
}