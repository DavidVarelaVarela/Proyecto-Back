"use strict";

const employee = require("../../database/models/employees");

async function getEmployee(req, res, next) {
   if (parseInt(req.params.id)){
    const dataEmployee = await employee.findAll({
        where:{
            idEMPLOYEES:req.params.id
        }
        
    });
    if (dataEmployee === undefined || dataEmployee.length == 0 ){
        return res.status(404).send("Empleado no encontrado")
    } 
    return res.status(200).send(dataEmployee);
   }
  
  return res.status(400).send("Consulta de datos incorrecta");
}

module.exports = getEmployee;
