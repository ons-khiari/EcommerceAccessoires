const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  client: [{
    type: String,
    ref: 'client',
  
 
}],
  product:[{
    type: String,
    ref:'product',

   
  }],
  panier: {
    type: String,
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
