const os = require('os');
const Gpio =
  os.platform() === 'linux' ? require('onoff').Gpio : { accessible: false }; // for systems that don't have gpio

// set pin value if system has gpio, otherwise write to console
const setupPin = (pinNumber, ...options) =>
  Gpio.accessible
    ? new Gpio(pinNumber, ...options)
    : {
      writeSync: value => console.log(`setting pin ${pinNumber} to `, value)
    };

// setup effects
const lights = setupPin(17, 'out');
const smoke = setupPin(27, 'out');

// function to change status of effects, lights and smoke are set independently
function setEffects(lightsValue, smokeValue) {
  // TODO rather than set the pins directly, this will need to contact the other raspberry pi and tell it to turn the pins on or off
  lights.writeSync(lightsValue);
  smoke.writeSync(smokeValue);
}

// release resources on ctrl+c
process.on('SIGINT', () => {
  lights.unexport();
  smoke.unexport();
});

// export
module.exports = {
  setEffects
};
