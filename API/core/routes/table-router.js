'use strict'

/**
 * Cosntantes
 */
const express = require('express');
const router = express.Router();
const getTableStatus = require ('../controllers/get-table-status-controller')


/**
 * Rutas
 */

router.get('/table/status', getTableStatus )

module.exports = router;
