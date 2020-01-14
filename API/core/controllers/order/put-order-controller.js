"use strict";

const uuidv4 = require('uuid/v4');
const bill = require("../../database/models/bill")
const orders = require("../../database/models/orders");

async function putOrder(req, res, next) {
    const { totalPrice, starsSelected, status, time } = { ...req.body }
    const { id } = req.params;




    try {
        const [actualOrder] = await orders.findAll({ where: { idOrders: id } })

        const orderToPay = await orders.update({
            idOrders: id,
            status: status,
            deliveryTime: new Date(),
            durationTime: time,
            rating: starsSelected,
            totalPrice: totalPrice,
        }, { where: { idOrders: id } })




        return res.status(200).send();
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


module.exports = putOrder;

// Prueba de código