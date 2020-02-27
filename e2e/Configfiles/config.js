"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CucumberReportExtension_1 = require("../reporting/CucumberReportExtension");
exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ["../features/*.feature"],
    ignoreUncaughtExceptions: true,
    directConnect: true,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    baseUrl: "http://automationpractice.com/index.php",
    //  seleniumArgs: [
    //    "-Dwebdriver.ie.driver=node_modules/protractor/selenium/IEDriverServer.exe"
    //  ],
    suites: {
  
    },
    capabilities: {
        browserName: "chrome",
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: "json:./reports/json/cucumber_report.json",
      // format: "json:../reports/json/cucumber_report.json",
        require: ["../steps/*.js", "../hooks/*.js"],
        tags: "@Search"
    },
    onComplete: function () {
        CucumberReportExtension_1.CucumberReportExtension.GenerateCucumberReport();
    },
    onPrepare: function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
    }
};
//# sourceMappingURL=config.js.map