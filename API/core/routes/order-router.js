'use strict'
/**
 * Constantes
 */
const express = require('express');
const router = express.Router();
const getOrder = require ('../controllers/order/get-order-controller' );
const getFeedback = require ('../controllers/order/get-feedback-controller');
/**
 * Rutas
 */

router.get('/order', getOrder )
router.get ('/order/feedback', getFeedback)

module.exports = router;
