'use strict'

/**
 * Constantes
 */
const express = require('express');
const router = express.Router();
const getEmployees = require('../controllers/get-employees-controller');
const getEmployee = require('../controllers/get-employee-controller');
/**
 * Rutas
 */

router.get('/employee/:id',getEmployee)
router.get('/employees', getEmployees)


module.exports = router;