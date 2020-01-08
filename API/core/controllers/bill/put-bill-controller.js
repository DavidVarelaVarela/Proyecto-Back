"use strict";

const uuidv4 = require('uuid/v4');
const bill = require("../../database/models/bill")
const orders = require("../../database/models/orders");

async function putBill(req, res, next) {
    const { order } = { ...req.body }
    const { id } = req.params;




    try {

        const actualBill = await bill.findAll({ where: { idOrder: id } })

        const updatedBill = order.map((pedido, i) => {
            for (let j = 0; j < actualBill.length; j++) {

                if (pedido.idProduct === actualBill[j].idProduct) {
                    pedido.quantity = actualBill[j].quantity + pedido.quantity
                }
            }
            return pedido
        })


        const finalBill = await updatedBill.map(async (newBill) => {
            await bill.findOrCreate({ where: { idOrder: id, idProduct: newBill.idProduct }, defaults: { price: newBill.price, quantity: newBill.quantity } });
            await bill.update({ price: newBill.price, quantity: newBill.quantity }, { where: { idOrder: id, idProduct: newBill.idProduct } })
        })


        return res.status(201).send(updatedBill);
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


module.exports = putBill;