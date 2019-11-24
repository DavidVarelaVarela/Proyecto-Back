const Sequelize = require("sequelize");

const { mysqlPool } = require("../mysql-pool");

const order = mysqlPool.define(
  "ORDERS",
  {
    idOrders: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    status: {
      type: Sequelize.TEXT
    },
    inicialTime: {
      type: Sequelize.DATE
    },

    deliveryTime: {
      type: Sequelize.DATE
    },
    durationTime: {
      type: Sequelize.DATE
    },
    rating: {
        type: Sequelize.DOUBLE
      },
      totalPrice: {
        type: Sequelize.DOUBLE
      }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = order;

