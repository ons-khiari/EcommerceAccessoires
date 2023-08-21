const mongoose = require('mongoose');

const gallerieSchema = new mongoose.Schema({
    name: {
        type: String
    }
});

const ProductSchema = new mongoose.Schema({
    ref: {
        type: String,
        unique: true // Ajoutez cette option pour rendre la clé unique
      },
   
    name: {
        type: String,
        required: true
    },
  
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantite: {
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
        type: String ,
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

    },
    inStock: {
        type: String,
       

    },
  
});

module.exports = mongoose.model("Product", ProductSchema);
