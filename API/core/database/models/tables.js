const Sequelize = require("sequelize");

const { mysqlPool } = require("../mysql-pool");

const tables = mysqlPool.define(
  "TABLES",
  {
    idTables: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    idCustomers: {
      type: Sequelize.INTEGER
    },
    idEmployees: {
      type: Sequelize.INTEGER
    },

    idOrders: {
      type: Sequelize.INTEGER
    },
    help: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = tables;

