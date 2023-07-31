const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/create', orderController.createOrder);

router.get('/getAll', orderController.getAllOrders);

router.get('/:id', orderController.getOrderById);

router.update('/:id', orderController.updateOrder);

router.delete('/:id', orderController.deleteOrder);

module.exports = router;


