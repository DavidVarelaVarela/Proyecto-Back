'use strict'


function getFeedback(req, res, next) {
    return res.status(200).send("La prueba de feedback está ok")
}

module.exports =  getFeedback;