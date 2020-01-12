"use strict";

const uuidv4 = require('uuid/v4');
const bill = require("../../database/models/bill")
const customer = require("../../database/models/customers")
const orders = require("../../database/models/orders");
const table = require("../../database/models/tables")


const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

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

    const newTable = await table.create({
      idCustomers: user.dataValues.idCUSTOMERS,
      idEmployees: Math.floor(Math.random() * 3 + 1),
      idOrders: id,
    })
    const userTable = await table.findOne({
      where: {
        idOrders: id,
      }
    });
    const idTable = (userTable.dataValues.idTables)
    res.setHeader('Location', `${httpServerDomain}/order/${id}`);
    return res.status(201).send({ id, idTable });
  } catch (e) {

    return res.status(500).send(e.message)
  }
}


module.exports = getOrder;
