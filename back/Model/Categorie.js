const mongoose = require('mongoose')
const CategorieSchema = new mongoose.Schema({
    name: {
        type: "String",
        trim: true,
        required: true,
    }, 
  
 
})


module.exports = mongoose.model("category",CategorieSchema )