'use strict'

/**
 * Constantes
 */
const express = require('express');
const router = express.Router();

const createAccountController = require('../controllers/account/create-account-controller');
const loginController = require('../controllers/account/login-controller');

/**
 * Rutas
 */
router.post('/account', createAccountController);
router.post('/account/login', loginController);

module.exports = router;