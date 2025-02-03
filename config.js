const { Builder, Capabilities } = require('selenium-webdriver');

async function getDriver() {
    let chromeCapabilities = Capabilities.chrome();
    chromeCapabilities.set('goog:chromeOptions', { args: ['--start-maximized'] });

    let driver = await new Builder()
        .forBrowser('chrome')
        .withCapabilities(chromeCapabilities)
        .build();
    
    return driver;
}

module.exports = { getDriver };
