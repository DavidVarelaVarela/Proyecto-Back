'use strict'

/**
 * Cosntantes
 */
const express = require('express');
const router = express.Router();
const getTableStatus = require('../controllers/table/get-table-status-controller')


/**
 * Rutas
 */

router.get('/table/status/:id', getTableStatus)

module.exports = router;
