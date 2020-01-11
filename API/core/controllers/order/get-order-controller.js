"use strict";

const uuidv4 = require('uuid/v4');
const bill = require("../../database/models/bill")
const orders = require("../../database/models/orders");
const customer = require("../../database/models/customers")
const table = require("../../database/models/tables")


async function getOrder(req, res, next) {
  const { order } = { ...req.body }
  const { email } = req.claims.email;

  const user = await customer.findOne({
    where: {
      mail: email,
    }
  });

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
        idProduct: pedido.idProduct,
        price: pedido.price
      })
    })
      
    console.log(newBill);
    const newTable = await table.create({
      idCustomers: user.dataValues.idCUSTOMERS,
      idEmployees: Math.floor(Math.random() * 3 + 1),
      idOrders: id,
    })
    console.log(newTable);

    const userTable = await table.findOne({
      where: {
        idOrders: id,
      }
    });
    console.log("hasta aqui 2");
    const idTable = (userTable.dataValues.idTables)
    return res.status(201).send({ id, idTable });
  } catch (e) {
    console.log(e);
    return res.status(500).send(e.message)
  }
}


module.exports = getOrder;
