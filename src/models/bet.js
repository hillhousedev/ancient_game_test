  
  const Sequelize = require('sequelize');
  const sequelize = require('../config/database');
  const User =  require('../models/user');


  const Bet = sequelize.define('Bets', {
    betAmount: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    chance: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    payout: {
      
      type: Sequelize.FLOAT,
    },
    win: {
      
      type: Sequelize.BOOLEAN,
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
  });

  Bet.associate = function(models) {
    Bet.belongsTo(models.User, { foreignKey: 'userId', as: 'user'})

  };
  module.exports = Bet;
  // Bet.belongsTo(User);
  // module.exports = Bet;
  // Bet.associate = function (models) {
    
  //   Bet.belongsTo(models.User, {
  //     foreignKey: 'userId',
  //     onDelete: 'CASCADE'
  //   })
  // };
  // return Bet;
// };




// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Bet extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Bet.init({
//     betAmount: DataTypes.FLOAT,
//     chance: DataTypes.FLOAT,
//     payout: DataTypes.FLOAT,
//     win: DataTypes.BOOLEAN,
//     userId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Bet',
//   });
//   return Bet;
// };