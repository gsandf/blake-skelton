const createQuery = require('@blake-skelton/node-query');

const query = createQuery('http://localhost:4000/graphql');

const setStateQuery = /* GraphQL */ `
  mutation($state: ApproachState!) {
    approachState(state: $state)
  }
`;

const setDetectedState = state => query(setStateQuery, { state });

module.exports = { setDetectedState };
