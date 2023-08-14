const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  client: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  
 
}],
  product:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'product',

   
  }],
  panier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Panier',
    
  },

  orderDate: {
    type: Date,
    default: Date.now
  },
  totalPrice: {
    type: Number,
    required:true, 
  
  },
  paymentMethod: {
    type: String,
     required:true, 
   
  },
   deliveryAddress: {
    type: String,
   
  }, 
  quantity: {
    type: Number,
     required:true, 
    
  },
});

module.exports = mongoose.model('Order', OrderSchema);
