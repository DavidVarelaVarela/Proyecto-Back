'use strict'

const accountRouter = require('./account-router');
const billRouter = require('./bill-router');
const customerRouter = require('./customer-router');
const employeesRouter = require('./employees-router');
const orderRouter = require('./order-router');
const productRouter = require('./product-router');
const tableRouter = require('./table-router');

module.exports = {
    accountRouter,
    billRouter,
    customerRouter,
    employeesRouter,
    orderRouter,
    productRouter,
    tableRouter
}