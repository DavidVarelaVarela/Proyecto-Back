'use strict'

const bill = require("../../database/models/bill")
const orders = require("../../database/models/orders");
const table = require("../../database/models/tables")


async function getTableStatus(req, res, next) {
    const { id } = req.params;
    table.belongsTo(orders, { targetKey: 'idOrders', foreignKey: 'idOrders' });
    bill.belongsTo(orders, { targetKey: 'idOrders', foreignKey: 'idOrder' });


    try {
        const order = await table.findAll({
            where: {
                idEmployees: id,
            },
            attributes: ['idTables', 'idOrders'],
            include: [{
                model: orders,
                where: {
                    status: 'Pendiente de servir'
                }
            },
            ]
        });

        const statusTables = await order.map((produts) => {
            bill.findAll({
                where: {
                    idOrder: produts.dataValues.idOrders,
                },
            });
            return { idOrder: produts.dataValues.idOrders, idTables: produts.dataValues.idTables }

        })



        return res.status(200).send(order)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = getTableStatus


