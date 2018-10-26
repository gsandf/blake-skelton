const axios = require('axios');

const query = url => (query, variables, options) =>
  axios.post(url, { query, variables }, options);

module.exports = query;
