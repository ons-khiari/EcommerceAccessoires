const express = require ('express');
const route = express.Router();

const productController = require('../Controller/ProductController');
const upload = require('../Middleware/Uploadpicture');

route.post("/add",upload.array('photos'), productController.create)
route.get("/", productController.getAll)
route.put('/update/:id',upload.array('photos'),productController.update)
route.delete('/delete/:id', productController.deleteproduct)
route.get('/get/:id', productController.getById)




module.exports = route;