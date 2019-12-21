"use strict"

const customers = require('../../database/models/customers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

//Recibir datos y dar de alta usuario
/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

async function createAccountController(req, res, next) {
 // Y si el cliente es repetido.
  const accountData = { ...req.body };
  const condition = ((accountData != null) && (accountData.name != null)) // Y demas condiciones
  
  if (condition) {
    //Obtener usuario segun el EMAIL accountData.email
    const existUser = await customers.findAll({
      where : {
        email : accountData.email,
      }
    }).then( response => {
      //La respuesta la compruebas si tiene datos
      if (response != null){
        //Si respuesta con datos devolver un error
        return res.status(418).send(error.message);
      } else {
        const securePassword = await bcrypt.hash(accountData.password, 10);
        //Si no tiene datos das de alta
        try {
          const newCostumer = await customers.create({
            name: accountData.name,
            password: securePassword,
            mail: accountData.email,
            phone: accountData.phone ? accountData.phone : 123456789
          })

          ///TIENE QUE IR EN UN MIDDLEWARE
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
          //////////////////

          return res.status(201).send(response);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      }
    })
  } else {
    return res.status(418).send(error.message);
  }

}

module.exports = createAccountController;
