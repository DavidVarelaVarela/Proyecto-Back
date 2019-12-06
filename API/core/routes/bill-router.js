'use strict'

/**
 * Constantes
 */
const express = require('express');
const router = express.Router();
const checkJwtToken = require ('../controllers/check-jwt-token');
const getBill = require ('../controllers/bill/get-bill-controller');
const getBills = require ('../controllers/bill/get-bills-controller');

/**
 * Rutas
 */

router.get('/bill/:id', getBill);
router.get('/bills', checkJwtToken, getBills)





module.exports = router;