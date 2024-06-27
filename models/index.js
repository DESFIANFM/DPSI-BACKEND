const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('penjualan_desfian', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
