const { watchForDistance } = require('./distance-trigger');
var specialEffects = require('special-effects');

watchForDistance(1000, 1, (detected) => {
  if (detected) {
    console.log('Close enough');
    specialEffects(1, 1);
    // todo initiate speech recognition    
  } 
  else {
    console.log('no one there');
    specialEffects(0, 0);
    // todo turn off speech recognition
  }
});
