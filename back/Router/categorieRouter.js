const express = require('express');
const router = express.Router();
const categorieController = require('../Controller/CategorieController');

router.post("/add", categorieController.create);
router.get("/", categorieController.getAll);
router.put('/:id', categorieController.update)
router.delete('/delete/:id', categorieController.deletecategory)
router.get('/get/:id', categorieController.getById)
module.exports = router;
