const Sequelize = require("sequelize");

const { mysqlPool } = require("../mysql-pool");

const employees = mysqlPool.define(
  "EMPLOYEES",
  {
    idEMPLOYEES: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },

    password: {
      type: Sequelize.TEXT
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = employees;


