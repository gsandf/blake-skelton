const createQuery = require('@blake-skelton/node-query');

const query = createQuery('http://pieffects.local:4000');

const setStateQuery = /* GraphQL */ `
  mutation($state: ApproachState!) {
    approachState(state: $state)
  }
`;

const syncEffectState = state => query(setStateQuery, { state });

module.exports = {
  syncEffectState
};
