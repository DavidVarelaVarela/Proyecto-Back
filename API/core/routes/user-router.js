'use strict'

/**
 * Constantes
 */
const getUser = require ('../controllers/get-user-controller');
const registerUser = require ('../controllers/register-user-controller');
const express = require('express');
const router = express.Router();

/**
 * Rutas
 */
router.get('/user',getUser);
router.post('/user/register', registerUser);


module.exports = router;