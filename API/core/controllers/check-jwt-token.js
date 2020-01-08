'use strict'

const jwt = require('jsonwebtoken');

const { AUTH_JWT_SECRET: authJwtSecret } = process.env;


/**
 *  Check that the frontend send the token and that is valid
 */
function checkJwtToken(req, res, next) {

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send();
  }

  /**
   * Check that token include prefix JWT
   */
  const [prefix, accesToken] = authorization.split(' ');

  if (prefix !== 'Bearer') {
    return res.status(401).send();
  }

  if (!accesToken) {
    return res.status(401).send();
  }

  try {

    /**
     * Decoded token and obtein values  
     */

    const email = jwt.verify(accesToken, process.env.AUTH_JWT_SECRET);
    req.claims = {
      email
    };




    return next();

  } catch (e) {
    return res.status(401).send();
  }
}

module.exports = checkJwtToken;

