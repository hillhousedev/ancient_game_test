const Sequelize = require('sequelize');
const config = require('./dbconfig');

const sequelize = new Sequelize(config);

sequelize.authenticate()
    .then(() => {
        console.log("Successfully connected to db");
    })
    .catch(err => {
        console.error(' Error cant connect to db..', err);
    });

module.exports = sequelize;