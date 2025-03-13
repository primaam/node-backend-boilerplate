const {Sequelize} = require('sequelize')
require('dotenv').config();

const sequelizeDb = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
})

module.exports = sequelizeDb;