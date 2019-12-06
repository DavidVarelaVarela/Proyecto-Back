"use strict";

function getOrder(req, res, next) {
  return res.status(200).send("La prueba de order está ok");
}


module.exports =  getOrder;
