const dbConfig = require("../config/db.config.js")
const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize;

db.chef = require("./funcionarios/CHEFS.model.js")(sequelize, Sequelize)
db.ice_cream = require("./alimentos/ICE_CREAMS.model.js")(sequelize, Sequelize)
db.cakes = require("./alimentos/CAKES.model.js")(sequelize, Sequelize)

module.exports = db