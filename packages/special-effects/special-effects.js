const os = require('os');
const Gpio = os.platform() === 'linux'
    ? require('onoff').Gpio
    : { accessible: false };

const setupPin = (pinNumber, ...options) => 
    Gpio.accessible
        ? new Gpio(pinNumber, ...options)
        : {
            writeSync: value => console.log(`setting pin ${pinNumber} to `, value)
        };

const lights = setupPin(17, 'out');
const smoke = setupPin(27, 'out');

function setEffects(lightsValue, smokeValue) {
    lights.writeSync(lightsValue);
    smoke.writeSync(smokeValue);
}

// release resources on ctrl+c
process.on('SIGINT', () => {
    lights.unexport();
    smoke.unexport();
})

module.exports = {
    setEffects
};