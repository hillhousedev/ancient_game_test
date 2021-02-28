import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './typedef';

const server = new ApolloServer({
    resolvers,
    typeDefs
});

server.listen()
.then(({ url }) => console.log(`Server ready at ${url}. `));
