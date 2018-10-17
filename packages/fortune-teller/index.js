const { freemem, loadavg, totalmem } = require('os');
const { GraphQLServer } = require('graphql-yoga');
const packageJson = require('./package.json');

const typeDefs = /* GraphQL */ `
  type Status {
    freemem: String!
    loadavg: [Float]!
    totalmem: String!
    usedmem: String!
  }

  type Query {
    fortune(question: String!): String!
    ping: String!
    status: Status!
    version: String!
  }
`;

const resolvers = {
  Query: {
    fortune: (_, { question }) => `Question was ${question}`,
    ping: () => 'pong',
    status: () => ({
      /* pass to Status field resolvers */
    }),
    version: () => packageJson.version
  },

  Status: {
    freemem: () => freemem(),
    loadavg: () => loadavg(),
    totalmem: () => totalmem(),
    usedmem: () => totalmem() - freemem()
  }
};

const server = new GraphQLServer({ resolvers, typeDefs });
server.start({}, () => console.log('Server is running on localhost:4000'));
