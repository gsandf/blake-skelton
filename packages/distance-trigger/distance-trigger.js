const usonic = require('mmm-usonic-fixed');

let sensor;

function initSensor() {
  return new Promise((resolve, reject) => {
    if (sensor) return resolve(sensor);

    usonic.init(err => {
      if (err) return reject(err);
      sensor = usonic.createSensor(24, 23, 300);
      resolve(sensor);
    });
  });
}

async function watchForDistance(minDistance, debounceCount, cb) {
  const sensor = await initSensor();
  let timesSensed = 0;

  return setInterval(() => {
    // Convert distance to mm
    const distance = sensor() * 10;

    if (distance < 0 || distance > minDistance) {
      timesSensed = 0;
      return;
    }

    if (++timesSensed > debounceCount) {
      timesSensed = 0;
      cb();
    }
  }, 500);
}

module.exports = {
  watchForDistance
};
