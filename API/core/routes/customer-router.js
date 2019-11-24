'use strict'

/**
 * Constantes
 */
const getCustomers = require ('../controllers/customer/get-customers-controller');
const registerCustomer= require ('../controllers/customer/register-customer-controller');
const getCustomer = require ('../controllers/customer/get-customer-controller');
const express = require('express');
const router = express.Router();

/**
 * Rutas
 */
router.get('/customers',getCustomers);
router.get('/customer/:id', getCustomer);
router.post('/customer/register', registerCustomer);


module.exports = router;

