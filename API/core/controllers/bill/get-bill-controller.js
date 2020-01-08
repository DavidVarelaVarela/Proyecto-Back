"use strict";

const bill = require("../../database/models/bill");
const products = require("../../database/models/products");


async function getBill(req, res, next) {
    products.belongsTo(bill, { targetKey: 'idProduct', foreignKey: 'idProduct' });
    if ((req.params.id)) {
        const idBill = await products.findAll({
            include: [{
                model: bill,
                where: {
                    idOrder: req.params.id
                }
            }]
        });
        if (idBill === undefined || idBill.length === 0) {
            return res.status(404).send("Bill not found")
        }

        const listOfIdProducts = idBill.map((item) => {
            return { idProduct: item.idProduct, name: item.name, price: item.price, quantity: item.BILL.quantity }
        })



        return res.status(200).send(listOfIdProducts);
    }
    console.log(req.params.id)

    return res.status(400).send("Bill wrong query");
}

module.exports = getBill;
