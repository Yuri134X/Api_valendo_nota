const {Sequelize} = require("sequelize")

module.exports = (sequelize, Sequilize) => {
    const Cake = sequelize.define("cakes",{
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
            min: 1.0,
            notEmpty: true
            }
        },
        weight: {
            type: Sequelize.INTEGER,
            validate: {
            isFloat: true, 
            min: 1.0,
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
    return Cake
}