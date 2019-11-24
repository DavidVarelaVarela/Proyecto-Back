const Sequelize = require("sequelize");

const { mysqlPool } = require("../mysql-pool");

const bill = mysqlPool.define(
  "BILL",
  {
    quantity: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.INTEGER
    },
    idOrder: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    idProduct: {
      type: Sequelize.INTEGER,
      primaryKey: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = bill;
