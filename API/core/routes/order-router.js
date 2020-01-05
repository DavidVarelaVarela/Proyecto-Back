'use strict'
/**
 * Constantes
 */
const express = require('express');
const router = express.Router();
const checkJwtToken = require('../controllers/check-jwt-token');
const getOrder = require('../controllers/order/get-order-controller');
const putOrder = require('../controllers/order/put-order-controller')
const getFeedback = require('../controllers/order/get-feedback-controller');
/**
 * Rutas
 */

router.get('/order/feedback', getFeedback)
router.post('/order', checkJwtToken, getOrder)
router.put('/order/:id', checkJwtToken, putOrder)



module.exports = router;
