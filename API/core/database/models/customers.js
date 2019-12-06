const Sequelize = require("sequelize");

const { mysqlPool } = require("../mysql-pool");

const user = mysqlPool.define(
  "CUSTOMERS",
  {
    idCUSTOMERS: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.TEXT
    },
    mail: {
      type: Sequelize.TEXT
    },
    password: {
      type: Sequelize.TEXT
    },
    phone: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = user;


