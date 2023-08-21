const express = require('express');
const router = express.Router();
const orderController = require('../Controller/orderController');

router.post('/create', orderController.createOrder);

router.get('/getAll', orderController.getAllOrders);

router.get('/:id', orderController.getOrderById);

router.put('/:id', orderController.updateOrder);

router.delete('/:id', orderController.deleteOrder);

module.exports = router;


