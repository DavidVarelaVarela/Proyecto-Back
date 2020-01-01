"use strict";

const uuidv4 = require('uuid/v4');
const bill = require("../../database/models/bill")
const orders = require("../../database/models/orders");

async function getOrder(req, res, next) {
  const { order } = { ...req.body }
  console.log(order)
  const { idProduct, quantity } = order[0];


  const id = uuidv4()

  try {
    const newOrder = await orders.create({
      idOrders: id,
      status: 'Pendiente de servir',
      inicialTime: new Date(),
      deliveryTime: null,
      durationTime: null,
      rating: null,
      totalPrice: null
    })
    const newBill = order.map(async (pedido) => {
      await bill.create({
        quantity: pedido.quantity,
        idOrder: id,
        idProduct: pedido.idProduct
      })
    })

    return res.status(201).send(id);
  } catch (e) {
    return res.status(500).send(e.message)
  }
}


module.exports = getOrder;
