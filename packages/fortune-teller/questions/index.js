const uniqueRandomArray = require('unique-random-array');

const bye = require('./bye');
const hello = require('./hello');
const name = require('./name');
const standard = require('./standard');

module.exports = {
  getFallbackAnswer: uniqueRandomArray(standard.outputs),
  questionTypes: [bye, hello, name, standard]
};
