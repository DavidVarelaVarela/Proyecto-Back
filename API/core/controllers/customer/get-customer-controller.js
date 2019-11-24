"use strict";

const customer = require("../../database/models/customers");

async function getCustomer(req, res, next) {
   if (parseInt(req.params.id)){
    const idCustomer = await customer.findAll({
        where:{
            idCUSTOMERS:req.params.id
        }
        
    });
    if (idCustomer === undefined || idCustomer.length == 0 ){
        return res.status(404).send("Customer not found")
    } 
    return res.status(200).send(idCustomer);
   }
  
  return res.status(400).send("Consulta de datos incorrecta");
}

module.exports = getCustomer;
