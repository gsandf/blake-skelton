const uniqueRandomArray = require('unique-random-array');

const hello = require('./hello');
const standard = require('./standard');
const wrong = require('./wrong');

module.exports = {
  getFallbackAnswer: uniqueRandomArray(wrong.outputs),
  questionTypes: [hello, standard, wrong]
};
