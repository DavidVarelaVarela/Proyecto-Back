'use strict'
/**
 * Constantes
 */
const express = require('express');
const router = express.Router();
const checkJwtToken = require('../controllers/check-jwt-token');
const getOrder = require('../controllers/order/get-order-controller');
const getFeedback = require('../controllers/order/get-feedback-controller');
/**
 * Rutas
 */

router.post('/order', checkJwtToken, getOrder)
router.get('/order/feedback', getFeedback)

module.exports = router;
