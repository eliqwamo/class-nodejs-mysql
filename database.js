const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_project','root','romich1007$', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;