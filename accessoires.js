const mongoose = require("mongoose");

const accessoireSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model("Accessoire", accessoireSchema);