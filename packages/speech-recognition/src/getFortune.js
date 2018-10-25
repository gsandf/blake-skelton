import { query } from './query';

const getFortuneQuery = /* GraphQL */ `
  query($question: String!) {
    fortune(question: $question) {
      played
      response
    }
  }
`;

export const getFortune = question => query(getFortuneQuery, { question });
