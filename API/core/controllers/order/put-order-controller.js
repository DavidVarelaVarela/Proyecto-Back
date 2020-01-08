"use strict";

const uuidv4 = require('uuid/v4');
const bill = require("../../database/models/bill")
const orders = require("../../database/models/orders");

async function putOrder(req, res, next) {
    const { totalPrice } = { ...req.body }
    const { id } = req.params;

    console.log(totalPrice)


    try {
        const [actualOrder] = await orders.findAll({ where: { idOrders: id } })
        console.log(actualOrder.dataValues.inicialTime)
        const orderToPay = await orders.update({
            idOrders: id,
            status: 'Pagado',
            deliveryTime: new Date(),
            durationTime: null,
            rating: null,
            totalPrice: totalPrice
        }, { where: { idOrders: id } })




        return res.status(201).send('ok');
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


module.exports = putOrder;