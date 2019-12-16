"use strict"

const customers = require('../../database/models/customers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

//Recibir datos y dar de alta usuario
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

async function createAccountController(req, res, next) {
  //Comprobar req.body = null; Y si el cliente es repetido.
  const accountData = { ...req.body };
  const securePassword = await bcrypt.hash(accountData.password, 10);
  try {
    const newCostumer = await customers.create({
      name: accountData.name,
      password: securePassword,
      email: accountData.email,
      phone: accountData.phone
    })
    const payloadJwt = {
      name: accountData.name,
      email: accountData.email,
      role: 'admin',
    };

    const jwtExpiresIn = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL);
    const token = jwt.sign(payloadJwt, process.env.AUTH_JWT_SECRET, {
      expiresIn: jwtExpiresIn,
    });

    const response = {
      accessToken: token,
      expiresIn: jwtExpiresIn,
    };
    return res.status(201).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message)
  }

}

module.exports = createAccountController;
