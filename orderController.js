const Order = require('../models/order');

exports.createOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        res.status(201).send(order);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.send(orders);
    } catch (e) {
        res.status(500).send();
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).send();
        }
        res.send(order);
    } catch (e) {
        res.status(500).send();
    }
};

exports.updateOrder = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['product', 'quantity', 'status'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).send();
        }

        updates.forEach((update) => order[update] = req.body[update]);
        await order.save();

        res.send(order);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);

        if (!order) {
            res.status(404).send();
        }

        res.send(order);
    } catch (e) {
        res.status(500).send();
    }
};


// Ajoutez d'autres méthodes pour getOrder, updateOrder, etc. ici.
