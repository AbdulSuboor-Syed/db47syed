const mongoose = require("mongoose")
const inkSchema = mongoose.Schema({
color: String,
company: String,
price: Number
})
module.exports = mongoose.model("ink", inkSchema)