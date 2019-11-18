"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./core/routes/user-router");
const tableRouter = require("./core/routes/table-router");
const orderRouter =require("./core/routes/order-router");
const productRouter = require("./core/routes/product-router");
const billRouter = require ("./core/routes/bill-router");

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

app.use("/api", userRouter);
app.use("/api", tableRouter);
app.use("/api", orderRouter);
app.use("/api", productRouter);
app.use("/api", billRouter);

function init() {
  const port = process.env.PORT;
  app.listen(port, function() {
    console.log(`Está funcionando en el puerto ${port}`);
  });
}
init();
