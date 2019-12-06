'use strict'

function getProduct(req, res, next){
    return res.status(200).send('La prueba de product está ok') 
}

module.exports  = getProduct
