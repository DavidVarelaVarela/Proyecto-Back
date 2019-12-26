'use strict'

/**
 * Cosntantes
 */
const express = require('express');
const router = express.Router();
const getProducts = require('../controllers/product/get-products-controller')
const getProduct = require('../controllers/product/get-product-controller')


/**
 * Rutas
 */

router.get('/products/:id', getProducts)
router.get('/product/:id', getProduct)

module.exports = router;