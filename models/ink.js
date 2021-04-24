const mongoose = require("mongoose")
const inkSchema = mongoose.Schema({
color: {
    type: String,
    required: [true, "color is Required"]
},
company: {
    type: String,
    required: [true, "company is Required"]
},
price: {
    type: Number,
    required: [true, "Price of the ink is mandatory"],
    min: [1, "Price must be minimum of 1$ "],
    max: [10, "Price can't be greater than 10$ "]

}
})
module.exports = mongoose.model("ink", inkSchema)