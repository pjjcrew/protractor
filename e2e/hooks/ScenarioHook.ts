const { BeforeAll } = require("cucumber");
import { browser } from "protractor";
import { async } from "q";
import { setDefaultTimeout, AfterAll, After, Status } from "cucumber";
import { CucumberReportExtension } from "../reporting/CucumberReportExtension";
import { HomePage } from "../pages/HomePage";
import { config } from '../Configfiles/config';


setDefaultTimeout(1000000);
var homePage = new HomePage();
BeforeAll(async () => {
  var jsonDir = process.cwd() + "/reports/json";
  CucumberReportExtension.CreateReportFile(jsonDir);
  console.log("starting the application !");
  await browser.get(config.baseUrl);
  await browser.getCapabilities();
  await browser.manage().getCookies();
  //await homePage.logintotheapp("","");

});

After(async function(Scenario) {
  console.log("Executing After feature !!");
  if (Scenario.result.status == Status.FAILED) {
    const screenShot = await browser.takeScreenshot();
    this.attach(new 
      Buffer (screenShot, 'base64'), 'image/png');
  }

  if (Scenario.result.status == Status.UNDEFINED) {
    const screenShot = await browser.takeScreenshot();
    this.attach(new 
      Buffer (screenShot, 'base64'), 'image/png');
  }
  if (Scenario.result.status == Status.AMBIGUOUS) {
    const screenShot = await browser.takeScreenshot();
    this.attach(new 
      Buffer (screenShot, 'base64'), 'image/png');
  }
  if (Scenario.result.status == Status.SKIPPED) {
    const screenShot = await browser.takeScreenshot();
    this.attach(new 
      Buffer (screenShot, 'base64'), 'image/png');
  }
});



