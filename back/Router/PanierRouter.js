const express = require ('express');
const PanierController=require('../Controller/PanierController')
const route=express.Router()
route.post('/add', PanierController.create);
route.get('/:id', PanierController.getById);
route.get('/', PanierController.getAll);
route.put('/update/:id', PanierController.update);
route.delete('/delete/:id', PanierController.deletepanier);

module.exports=route