const createQuery = require('@blake-skelton/node-query');

const query = createQuery('http://localhost:4000/graphql');

const setStateQuery = /* GraphQL */ `
  mutation($state: ApproachState!) {
    approachState(state: $state)
  }
`;

const setDetectedState = detected =>
  query(setStateQuery, { state: detected ? 'FULL_INTERACTIVE' : 'NO_HUMANS' });

module.exports = { setDetectedState };
