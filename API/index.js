"use strict";

require("dotenv").config();
const bodyParser =require('body-parser');
const express = require("express");
const app = express();
const customerRouter = require("./core/routes/customer-router");
const tableRouter = require("./core/routes/table-router");
const orderRouter =require("./core/routes/order-router");
const productRouter = require("./core/routes/product-router");
const billRouter = require ("./core/routes/bill-router");
const employeesRouter =require ("./core/routes/employees-router");

/**
 * Special middleware for config cors
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(bodyParser.json());
app.use((err, req, res, next)=>{
  console.error(err);
  res.status(400).send({
    error: `Body Parser: ${err.message}`,
  })
});

app.use("/api", customerRouter);
app.use("/api", tableRouter);
app.use("/api", orderRouter);
app.use("/api", productRouter);
app.use("/api", billRouter);
app.use ("/api", employeesRouter);

function init() {
  const port = process.env.PORT;
  app.listen(port, function() {
    console.log(`Está funcionando en el puerto ${port}`);
  });
}
init();
