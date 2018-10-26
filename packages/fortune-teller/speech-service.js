const path = require('path');
const os = require('os');
const puppeteer = require('puppeteer-core');

let page;

async function init() {
  const options = {
    executablePath: '/usr/bin/chromium-browser',
    headless: false,
    userDataDir: path.resolve(process.env.HOME, '.config/chromium')
  };

  if (os.platform() === 'darwin') {
    options.executablePath =
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    options.userDataDir = path.resolve(
      process.env.HOME,
      'Library/Application Support/Google/Chrome'
    );
  }

  const browser = await puppeteer.launch(options);
  const context = browser.defaultBrowserContext();
  // await context.overridePermissions('http://localhost:4000', ['microphone']);
  page = await context.newPage();
  await page.goto('http://localhost:4000');
  console.log('Loaded recognition page in browser');
}

async function startRecording() {
  console.log('recording...');
  const result = await page.evaluate(() => window.startRecording());
  console.log('result:', result);
}

module.exports = {
  init,
  startRecording
};
