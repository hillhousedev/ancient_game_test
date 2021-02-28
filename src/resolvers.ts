const User = require('../src/models/user.js');


export default {

    Query: {
        getUserList: () => { return User.findAll() },
        getUser: (_, { id }) => { return User.findOne( { where: { id }})},

    },

    Mutation: {
        createUser: (_, {name, balance}) => {return User.create({ name, balance})},

    }

}