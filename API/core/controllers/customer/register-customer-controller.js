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

async function registerCustomer(req, res, next) {
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

module.exports = registerCustomer;
