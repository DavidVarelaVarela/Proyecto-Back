"use strict";

const bill = require("../../database/models/bill");

async function getBill(req, res, next) {
   if (parseInt(req.params.id)){
    const idBill = await bill.findAll({
        where:{
            idOrder:req.params.id
        }
        
    });
    if (idBill === undefined || idBill.length == 0 ){
        return res.status(404).send("Bill not found")
    } 
    return res.status(200).send(idBill);
   }
  
  return res.status(400).send("Bill wrong query");
}

module.exports = getBill;
