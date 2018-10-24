const { watchForDistance } = require('./distance-trigger');

watchForDistance(1000, 1, () => {
  console.log('Close enough');
});
