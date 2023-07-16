const mongoose = require('mongoose');

const gallerieSchema = new mongoose.Schema({
    name: {
        type: String
    }
});

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ref: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantité: {
        type: Number,
        trim: true,
       
    },
    gallerie: [gallerieSchema],

    pourcentage: {
        type: String,
        required: true,
    },
    Marque: {
        type: String,
        required: true,

    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    dateDebutPromotion: {
        type: Date,
        default: Date.now

    },
    dateFinPromotion: {
        type: Date,
        default: Date.now

    }
});

module.exports = mongoose.model("Product", ProductSchema);
