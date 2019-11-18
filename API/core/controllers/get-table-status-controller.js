'use strict'

function getTableStatus (req, res, next){
    return res.status(200).send('La prueba de table está ok') 
}

module.exports  = getTableStatus


