'use strict'


function getBill(req, res, next) {
    return res.status(200).send("La prueba de bill está ok")
}

module.exports =  getBill;