"use strict";

require("dotenv").config();
const bodyParser =require('body-parser');
const express = require("express");
const app = express();

const routers = require('./core/routes');

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

app.use("/api", routers.customerRouter);
app.use("/api", routers.tableRouter);
app.use("/api", routers.orderRouter);
app.use("/api", routers.productRouter);
app.use("/api", routers.billRouter);
app.use("/api", routers.employeesRouter);
app.use("/api", routers.accountRouter);

function init() {
  const port = process.env.PORT || 8000;
  app.listen(port, function() {
    console.log(`Está funcionando en el puerto ${port}`);
  });
}
init();
