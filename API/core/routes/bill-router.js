'use strict'

/**
 * Constantes
 */
const express = require('express');
const router = express.Router();
const checkJwtToken = require('../controllers/check-jwt-token');
const getBill = require('../controllers/bill/get-bill-controller');
const getBills = require('../controllers/bill/get-bills-controller');
const putBill = require('../controllers/bill/put-bill-controller');

/**
 * Rutas
 */

router.get('/bill/:id', checkJwtToken, getBill);
router.get('/bills', checkJwtToken, getBills)
router.put('/bill/:id', checkJwtToken, putBill);





module.exports = router;