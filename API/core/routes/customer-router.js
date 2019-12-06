'use strict'

/**
 * Constantes
 */
const getCustomers = require ('../controllers/customer/get-customers-controller');
const getCustomer = require ('../controllers/customer/get-customer-controller');
const express = require('express');
const router = express.Router();

/**
 * Rutas
 */
router.get('/customers',getCustomers);
router.get('/customer/:id', getCustomer);



module.exports = router;

