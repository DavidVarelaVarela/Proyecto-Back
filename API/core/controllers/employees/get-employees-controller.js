
'use strict'
const employees = require("../../database/models/employees");



async function getEmployees (req, res, next){

   const listEmployees = await employees.findAll({});
    return res.status(200).send(listEmployees) 
    
}

module.exports  = getEmployees;
