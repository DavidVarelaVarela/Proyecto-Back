'use strict'
const products = require("../../database/models/products");


async function getProduct(req, res, next) {


    try {
        const [product] = await products.findAll({
            where: {
                idProduct: parseInt(req.params.id)
            }
        });
        return res.status(200).send(product);
    } catch (e) {
        return res.status(500).send(
            e.message,
        );
    }
}

module.exports = getProduct
