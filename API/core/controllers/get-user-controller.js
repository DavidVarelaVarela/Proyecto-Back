'use strict'

function getUser (req, res, next){
    return res.status(200).send('La prueba de user está ok') 
}

module.exports  = getUser;