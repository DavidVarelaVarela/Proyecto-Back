"use strict";

//Recibir datos y dar de alta usuario
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function registerUser(req, res, next) {
  let waiter1 = {
    name: "Alberto",
    email: "email@gmail.com",
    phone: 600123456,
    password: 1234,
  }
  if (waiter1.id == undefined) {
  waiter1.id = 1
  }
n
  return res.status(200).send(waiter1);
}

module.exports = registerUser;
