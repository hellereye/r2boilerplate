var conf = require('../../nightwatch.conf.js');

module.exports = {
  'test react redux': function (browser) {
    browser
      .url('http://localhost:3333/')   // visit the url
      .maximizeWindow()
      .waitForElementVisible('body'); // wait for the body to be rendered
      // check if we are seeing the Mobile Version of GitHub
      browser.element('css selector', '.switch-to-desktop', function(result) {
        if(result.status != -1) { //Element exists, do something
          browser.click('.switch-to-desktop')
          .waitForElementVisible('body'); // wait for the body to be rendered
        }
      });
    // part two:
    browser
      .assert.containsText('body', 'products'); // assert contains
      //.saveScreenshot(conf.imgpath(browser) + 'fanfree.png');

    browser.pause(1000);

    browser
      .useXpath() 
      .click("//a[text()='products']")
      .useCss();

    //browser.moveToElement('#logo', 100, 100);

    browser.pause(1000);
    browser
      .assert.containsText('body', 'Apple')
      .saveScreenshot(conf.imgpath(browser) + 'fanfree.png')
      .end();
      
  }
};
