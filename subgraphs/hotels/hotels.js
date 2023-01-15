const { ApolloServer, gql } = require('apollo-server');
const { readFileSync } = require('fs');

const port = process.env.APOLLO_PORT || 4000;

const hotels = [
    { id: '1', name: 'Converse' },
    { id: '2', name: 'Van Doren' }
]

const typeDefs = gql(readFileSync('./hotels.graphql', { encoding: 'utf-8' }));
const resolvers = {
    Query: {
        allHotels: (_, args, context)  => {
          console.warn('+++++++')
          console.log(hotels)
          console.warn('+++++++')
          return hotels
        },
        fetchHotels: (_, args, context) => {
          const list = hotels.filter(h => args.ids.indexOf(h.id) !== -1)
          console.warn('+++++++')
          console.log(args.ids)
          console.log(list)
          console.warn('+++++++')
          return list
        }
    }
}
const server = new ApolloServer({ typeDefs, resolvers });
server.listen( {port: port} ).then(({ url }) => {
  console.log(`🚀 Hotels subgraph ready at ${url}`);
}).catch(err => {console.error(err)});
