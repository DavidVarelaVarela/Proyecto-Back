'use strict'

/**
 * Cosntantes
 */
const express = require('express');
const router = express.Router();
const getBill = require ('../controllers/bill/get-bill-controller');
const getBills = require ('../controllers/bill/get-bills-controller');

/**
 * Rutas
 */

router.get('/bill/:id', getBill );
router.get('/bills', getBills)





module.exports = router;