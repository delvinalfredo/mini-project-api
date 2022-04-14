const express = require('express')
const router = express.Router()

const controllerProduct = require('../controllers/product.controller')

router.get('/product/list', controllerProduct.getProduct);

router.get('/product/list/:id', controllerProduct.getProductId);

router.post('/product/create', controllerProduct.createNewProducts);

router.put('/product/list/:id', controllerProduct.updateProducts);

router.delete('/product/list/:id', controllerProduct.deleteProducts);

module.exports = router;