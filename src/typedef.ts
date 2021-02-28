import { gql } from 'apollo-server';


export default gql`
    type User {
        id: ID!
        name: String
        balance: Float
    }

    type Query {
        getUser(id: ID): User
        getUserList: [User]

    }

   type Mutation {
       createUser(name: String, balance: Float): User
       
   }

`;