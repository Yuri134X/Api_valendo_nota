const dbConfig = require("../config/db.config.js")
const Sequelize = require("sequilize")
const sequilize = new Sequilize(dbConfig.DB, dbConfig.USER, dbconfig.PASSWORD)