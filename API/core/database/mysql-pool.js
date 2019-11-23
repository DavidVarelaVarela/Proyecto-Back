"use strict";

const Sequelize = require("sequelize");

/**
 * Config pool and enviaronment for use database
 *
 * In folder models we include the definition of tables
 */
const mysqlPool = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        dialect: process.env.DIALECT,
       
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    },
    logging: false //This property hide message for terminal
  }
);

module.exports = {
  mysqlPool
};
