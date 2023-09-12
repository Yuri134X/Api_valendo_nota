const db = require("../models")
const Item = db.items
const op = db.sequilize.op

exports.create = (req,res)