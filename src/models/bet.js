  
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
  
  Bet.associate = function (models) {
    
    Bet.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };

// };