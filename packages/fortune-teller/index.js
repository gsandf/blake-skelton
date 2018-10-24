const { server } = require('./server');
const { watchForDistance } = require('./distance-trigger');

watchForDistance(1000, 3, () => {
  console.log('Close enough');
});

server.start({}, () =>
  console.log('Server is running on http://localhost:4000')
);
