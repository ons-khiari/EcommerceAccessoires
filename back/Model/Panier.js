const mongoose=require('mongoose');
const PanierShema= new mongoose.Schema({
    QuantitéProduit:{
        type:Number,
        required:true,
    },
    PrixUnitaire :{
        type: Number,
        required: true,
    },
    MontantAvRéduction:{
        type: Number,
        required: true,  
    },
    CodeRéduction:{
        type: String,
        required: true,  
    },
    MontantAprRéduction:{
        type: Number,
        required: true,  
    },
     Orders:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Orders',
    required: true
  }],
 

})
module.exports=mongoose.model("Panier",PanierShema)