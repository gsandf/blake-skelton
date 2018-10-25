const { freemem, loadavg, totalmem } = require('os');
const { GraphQLServer } = require('graphql-yoga');

const packageJson = require('./package.json');
const { getFortune } = require('./fortune');
const { setEffectState } = require('./effects');
const { startRecording } = require('./speech-service');

const typeDefs = /* GraphQL */ `
  enum ApproachState {
    NO_HUMANS
    COME_CLOSER
    FULL_INTERACTIVE
  }

  type Fortune {
    response: String!
    played: Boolean!
  }

  type Mutation {
    approachState(state: ApproachState): String!
  }

  type Status {
    freemem: String!
    loadavg: [Float]!
    totalmem: String!
    usedmem: String!
  }

  type Query {
    fortune(question: String!): Fortune!
    ping: String!
    status: Status!
    version: String!
  }
`;

const resolvers = {
  Mutation: {
    approachState: (_, { state }) => {
      if (state === 'FULL_INTERACTIVE') startRecording();
      setEffectState(state);
      return state;
    }
  },

  Query: {
    fortune: (_, { question }) => getFortune(question),
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

module.exports = {
  server: new GraphQLServer({ resolvers, typeDefs })
};
