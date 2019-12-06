"use strict"

const customers = require ('../../database/models/customers'); 
const bcrypt = require ('bcrypt'); 

//Recibir datos y dar de alta usuario
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

async function createAccountController(req, res, next) {
    //Comprobar req.body = null; Y si el cliente es repetido.
  const { name, password, mail, phone } = { ...req.body };
  const securePassword = await bcrypt.hash(password, 10);
  const newCostumer = await customers.create({
    name,
    password: securePassword,
    mail,
    phone,
  })
  return res.status(201).send("User created succesfully");
  
}

module.exports = createAccountController;
