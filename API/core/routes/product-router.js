'use strict'

/**
 * Cosntantes
 */
const express = require('express');
const router = express.Router();
const getProduct = require ('../controllers/product/get-product-controller')


/**
 * Rutas
 */

router.get('/product', getProduct )

module.exports = router;