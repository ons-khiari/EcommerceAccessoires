const express = require('express')
const router = express.Router()

const AuthController = require('../Controller/AuthController')
const authenticate = require('../Authentification')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.put('/users/:id', AuthController.update);
router.delete('/users/:id',AuthController.deleteUser);
router.get('/users/getall', AuthController.getAllUsers);
router.get('/clients', AuthController.getClients);
router.get('/admins',AuthController.getAdmins);

module.exports = router