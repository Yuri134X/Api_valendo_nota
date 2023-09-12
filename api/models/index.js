const dbConfig = require("../config/db.config.js")
const Sequelize = require("sequilize")
const sequilize = new Sequilize(dbConfig.DB, dbConfig.USER, dbconfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {}

db.Sequilize = Sequelize
db.sequilize = sequilize

db.items = require("./item.model.js")(sequilize, Sequelize)
module.exports = db