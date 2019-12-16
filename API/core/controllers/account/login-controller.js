'use strict'

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const customer = require('../../database/models/customers');

async function validateData(payload) {

  const schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  };

  return Joi.validate(payload, schema);
}

/**
 * This function is the core of login-controller
 */
async function loginController(req, res, next) {
  /**
  * One - Validate the request data
  */
  const accountData = { ...req.body };
  try {
    // await validateData(accountData);
  } catch (e) {
    return res.status(400).send(e);
  }

  try {
    /**
     * Two - Send query to database for search user
     */
    const result = await customer.findOne({
      where: {
        mail: accountData.email,
      }
    });

    /**
     * Three - Check that password send for the user is OK
     */
    const thePasswordIsValid = await bcrypt.compare(accountData.password, result.password);
    if (thePasswordIsValid === false) {
      return res.status(401).send();
    }

    /**
     * Four - Create token with JWT the payload use role attribute but it is not yet implemented
     */
    const payloadJwt = {
      email: result.email,
    };

    const jwtTokenExpiration = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL, 10);
    const token = jwt.sign(payloadJwt, process.env.AUTH_JWT_SECRET, { expiresIn: jwtTokenExpiration });
    const response = {
      accessToken: token,
      expiresIn: jwtTokenExpiration
    };

    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

module.exports = loginController;