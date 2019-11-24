"use strict"

const bill = require("../../database/models/bill");

async function getBills(req, res, next) {

  const Listbill = await bill.findAll({});
  return res.status(200).send(Listbill);
}

module.exports = getBills