'use strict'
const customers = require ('../database/models/customers');



async function getUser (req, res, next){

    const listCustomers = await customers.findAll({});
    return res.status(200).send(listCustomers) 
    
}

module.exports  = getUser;
