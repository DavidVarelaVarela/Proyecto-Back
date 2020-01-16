'use strict'
const orders = require("../../database/models/orders");
const table = require("../../database/models/tables")

async function getFeedback(req, res, next) {
    const { id } = req.params;
    table.belongsTo(orders, { targetKey: 'idOrders', foreignKey: 'idOrders' });



    try {
        const order = await table.findAll({
            order: [['idTables', 'DESC']],
            where: {
                idEmployees: id,
            },
            attributes: ['idTables', 'idOrders'],
            include: [{
                model: orders,
                where: {
                    status: 'Pagado'
                },
            },
            ],
        });

        return res.status(200).send(order)
    } catch (e) {
        return res.status(500).send(e.message)
    }

}

module.exports = getFeedback;