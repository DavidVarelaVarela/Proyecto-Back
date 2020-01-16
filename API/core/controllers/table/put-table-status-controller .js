'use strict'


const table = require("../../database/models/tables")


async function putTableStatus(req, res, next) {
    const { id } = req.params;
    const { help } = { ...req.body }
    try {
        const order = await table.update({ help: help },
            { where: { idOrders: id } })
        return res.status(200).send()
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = putTableStatus


