'use strict'

/**
 * Cosntantes
 */
const express = require('express');
const router = express.Router();
const getBill = require ('../controllers/get-bill-controller')


/**
 * Rutas
 */

router.get('/bill', getBill )

module.exports = router;