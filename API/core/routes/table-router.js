'use strict'

/**
 * Cosntantes
 */
const express = require('express');
const router = express.Router();
const getTableStatus = require('../controllers/table/get-table-status-controller')
const putTableStatus = require('../controllers/table/put-table-status-controller ')

/**
 * Rutas
 */

router.get('/table/status/:id', getTableStatus)
router.put('/table/status/:id', putTableStatus)

module.exports = router;
