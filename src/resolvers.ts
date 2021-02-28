const User = require('../src/models/user.js');
const Bet = require('../src/models/bet.js');

export default {

    Query: {
        getUserList: () => { return User.findAll() },
        getUser: (_, { id }) => { return User.findOne( { where: { id }})},
        getBet: (_, { id }) => { return Bet.findOne( { where: { id }})},
        getBetList: () => { return Bet.findAll() },
    },

    Mutation: {
        createUser: (_, {name, balance}) => {return User.create({ name, balance})},
        createBet: (_, { userId, betAmount, chance }) => { return Bet.create({ userId, betAmount, chance})},
        
    }

}