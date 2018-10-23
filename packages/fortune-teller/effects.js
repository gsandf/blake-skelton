const os = require('os');
const Gpio =
  os.platform() === 'linux' ? require('onoff').Gpio : { accessible: false };

const setupPin = (pinNumber, ...options) =>
  Gpio.accessible
    ? new Gpio(pinNumber, ...options)
    : {
      writeSync: value => console.log(`setting pin ${pinNumber} to`, value)
    };

const pins = {
  detected: setupPin(27, 'out'),
  enabled: setupPin(29, 'out')
};

const states = {
  COME_CLOSER: {
    pins: { detected: true, enabled: false }
  },
  FULL_INTERACTIVE: {
    pins: { detected: true, enabled: true }
  },
  NO_HUMANS: {
    pins: { detected: false, enabled: false }
  }
};

function toggle(pinValues) {
  Object.entries(pinValues).forEach(([pinName, value]) =>
    pins[pinName].writeSync(value)
  );
}

module.exports = {
  setEffectState: nextState => toggle(states[nextState].pins)
};
