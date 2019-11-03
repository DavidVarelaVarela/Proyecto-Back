'use strict'

const getUser = require ('../controllers/get-user-controller');
const express = require('express');
const router = express.Router();



router.get('/user',getUser);

module.exports = router;