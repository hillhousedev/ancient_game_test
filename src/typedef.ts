import { gql } from 'apollo-server';


export default gql`
    type User {
        id: ID!
        name: String
        balance: Float
        bets: [Bet!]!
    }

    type Bet {
        betAmount: Float
        chance: Float
        payOut: Float
        win: Boolean
    }

    type Query {
        getUser(id: ID): User
        getUserList: [User]
        getBetList: [Bet!]
        getBet(id: ID): Bet
    }

   type Mutation {
       createUser(name: String, balance: Float): User
       createBet(userId: Int, betAmount: Float, chance: Float): Bet
    
   }

`;