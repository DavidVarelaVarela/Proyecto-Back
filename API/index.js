'use strict'

require("dotenv").config();
const express = require('express');
const app = express();
const userRouter = require ('./core/routes/user-router');

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
  

  app.use("/api",userRouter);

app.get('/', function (req, res) {
  res.send('Está funcionando');
});
app.post('/jose/prueba', function(req, res ){
  res.send('La prueba de Jose está ok numero 2') ; 
});


function init (){
    const port = process.env.PORT;
    app.listen(port, function () {
      console.log(`Está funcionando en el puerto ${port}`);
    })
};
init();
