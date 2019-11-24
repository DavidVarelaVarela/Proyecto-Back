const Sequelize = require("sequelize");

const { mysqlPool } = require("../mysql-pool");

const products = mysqlPool.define(
  "PRODUCTS",
  {
    idProduct: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.TEXT
    },
    description: {
      type: Sequelize.TEXT
    },

    price: {
      type: Sequelize.TEXT
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = products;
