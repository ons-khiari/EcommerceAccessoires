const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  product:{
    type: mongoose.Schema.Types.ObjectId,
    required: true 
  },
  panier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Panier',
    required: true,
  },

  orderDate: {
    type: Date,
    default: Date.now
  },
  totalPrice: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  deliveryAddress: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Order', OrderSchema);
