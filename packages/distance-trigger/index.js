const { watchForDistance } = require('./distance-trigger');
const { setDetectedState } = require('./setDetectedState');

watchForDistance(1000, 1, detected => {
  console.log(
    'distance-trigger:',
    detected ? 'Detected people' : 'No one detected'
  );

  setDetectedState(detected);
});
