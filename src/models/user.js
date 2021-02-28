
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

//const Bet = require('../models/bet');



const User = sequelize.define('Users', {
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  balance: {
    allowNull: false,
    type: Sequelize.FLOAT,
  }

  
});

User.associate = function (models) {
  User.hasMany(models.Bets)
};
//User.hasMany(Bet);

// User.associate = (models) => {
//   User.hasMany(models.Bets);
// }



module.exports = User;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   User.init({
//     id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };