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

const lights = setupPin(0, 'out'); //TODO get pin numbers
const smoke = setupPin(0, 'out');

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