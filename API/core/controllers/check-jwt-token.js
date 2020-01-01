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
    return res.status(401).send('aqui');
  }

  if (!accesToken) {
    return res.status(401).send('noo!');
  }

  try {

    /**
     * Decoded token and obtein values  
     */
    const decoded = jwt.verify(accesToken, authJwtSecret);
    req.claims = {
      email: decoded.email
    };



    return next();

  } catch (e) {
    return res.status(401).send('aa');
  }
}

module.exports = checkJwtToken;

