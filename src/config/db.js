const Sequelize = require('sequelize');

const sequelize = new Sequelize('tcc', 'root', '18119623', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  module.exports = sequelize;
  