
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

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

