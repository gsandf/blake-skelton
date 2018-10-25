const { watchForDistance } = require('./distance-trigger');
var specialEffects = require('special-effects');

watchForDistance(1000, 1, () => {
  console.log('Close enough');
  specialEffects.specialEffects(1, 1); // turn the effects on
});
