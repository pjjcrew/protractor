
import { browser, element, by, protractor, $$, $ } from "protractor";
import { IdentificationType, BasePage } from "./BasePage";
import * as json from "load-json-file";
import { ExcelUtil } from "../utilities/ExcelUtil";
import { config } from '../Configfiles/config';
import { async } from 'q';

const Locators = {
  Signinbtn: {
    type: IdentificationType[IdentificationType.Css],
    value: "a.login"
  },
  emailaddress: {
    type: IdentificationType[IdentificationType.Id],
    value: "email_create"
  },
  createanaccount: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "(.//*[normalize-space(text()) and normalize-space(.)='Create an account'])[1]/following::span[1]"

  },
  Gender_mr: {
    type: IdentificationType[IdentificationType.Id],
    value: "id_gender1"

  },
  Registerbtn: {
    type: IdentificationType[IdentificationType.Css],
    value: "#submitAccount > span"
  },
  Loginbtn: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//button[@id='SubmitLogin']/span"
  },
  HomeMenu: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//span[contains(text(),'My credit slips')]"
  },
  username: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "(.//*[normalize-space(text()) and normalize-space(.)='Email address'])[2]/following::input[1]"
  },
  password: {
    type: IdentificationType[IdentificationType.Id],
    value: "passwd"
  },
  signout: {
    type: IdentificationType[IdentificationType.Css],
    value: "a.logout"
  },
  searchbar:{
    type: IdentificationType[IdentificationType.Xpath],
    value: "//a[@title='My Store']/following::input[@placeholder='Search']"
   
  },
  searchbtn:{
    type: IdentificationType[IdentificationType.Xpath],
    value: "//button[(@name='submit_search')]"
   
  },
  addtocart:{    
    type: IdentificationType[IdentificationType.Xpath],
    value: "//a[@title='Close']"
  },


};
let EC = protractor.ExpectedConditions;
export class HomePage extends BasePage {
  async OpenBrowser() {
    await browser.get(config.baseUrl);
    await browser.getCapabilities();
    await browser.manage().getCookies();
  }

  async clickonSignin() {
    await this.ElementLocator(Locators.Signinbtn).click();
  }
  async enteremail(emailid: string) {
    await this.ElementLocator(Locators.emailaddress).sendKeys(emailid);
  }
  async clickoncreateaccountbtn() {
    await this.ElementLocator(Locators.createanaccount).click();
  }
  async selecttile(title: string) {
    await this.ElementLocator(Locators.Gender_mr).click();
  }
  async entertextfileds(filedKey: string, value: string) {
    await element(by.xpath("//label[contains(text(),'" + filedKey + "')]/following::input[1]")).clear();
    await element(by.xpath("//label[contains(text(),'" + filedKey + "')]/following::input[1]")).sendKeys(value);
  }
  async filtertheResuts(filtertype: String, filterkey: string) {
    await element(by.xpath("//label[contains(text(),'" + filtertype + "')]/following::select[1]/option[text()='" + filterkey + "']")).click();
  }
  async ClickonRegisterbtn() {
    await this.ElementLocator(Locators.Registerbtn).click();
  }
  async clickSigninbtn() {
   await this.ElementLocator(Locators.Loginbtn).click();
  }
  async myaccountPageisDisplayed() {
    await this.ElementLocator(Locators.HomeMenu).isDisplayed();
  }
  async signout() {
    await this.ElementLocator(Locators.signout).click();
  }
  async enterusername(username: string) {
    await this.ElementLocator(Locators.username).clear();
    await this.ElementLocator(Locators.username).sendKeys(username);

  }

  async clickontheproduct(product: string) {
    await element(by.xpath("//div[contains(text(),'Showing')]/following::img[@alt='" + product + "']")).click();

  }
  async searchwithproduct(searchkey:string){
    browser.sleep(5000);
    await this.ElementLocator(Locators.searchbtn).click();
    //await this.ElementLocator(Locators.searchbar).clear();
    await this.ElementLocator(Locators.searchbar).sendKeys(searchkey);    
    await this.ElementLocator(Locators.searchbtn).click();
  }
  async addtoCart(){
 await this.ElementLocator(Locators.addtocart).click();

  }

  async enterpassword(password: string) {
    await this.ElementLocator(Locators.password).clear();
    await this.ElementLocator(Locators.password).sendKeys(password);
  }

  async navigateBack() {
    await browser.navigate().back();
  }

}
