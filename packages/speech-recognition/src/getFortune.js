import { query } from './query';

const getFortuneQuery = /* GraphQL */ `
  query($question: String!) {
    fortune(question: $question)
  }
`;

export const getFortune = question => query(getFortuneQuery, { question });
