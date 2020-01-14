'use strict'
const products = require("../../database/models/products");


async function getProducts(req, res, next) {


    try {
        const product = await products.findAll({
            where: {
                type: req.params.id
            }
        });
        return res.status(200).send(
            Object.values(product),
        );
    } catch (e) {

        return res.status(500).send({
            message: e.message,
        });
    }
}

module.exports = getProducts
