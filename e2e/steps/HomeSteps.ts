import { TableDefinition, Given, When, Then } from "cucumber";
import { HomePage } from "../pages/HomePage";
//import { expect, assert } from "chai";
import { config } from "../steps/config";
import { async, when } from "q";
import { browser, by, element } from 'protractor';
import { callbackify } from "util";

var homePage = new HomePage();


Given(/^Launch the application$/, async () => {
  await homePage.OpenBrowser();
});

Given(/^Click on the sign in link$/, async () => {
  await homePage.clickonSignin();
});

When(/^Enter Email address as '([^\"]*)'$/, async (emailid) => {
  await homePage.enteremail(emailid.toString());
});
When(/^navigate back to home$/, async () => {
  await homePage.navigateBack();
});
When(/^Click on create an account$/, async ()=>{
  await homePage.clickoncreateaccountbtn();
});

When(/^Select title as '([^\"]*)'$/, async (title) => {
    await homePage.selecttile(title.toString());
  });
  When(/^Enter the '([^\"]*)' as '([^\"]*)'$/, async (filedKey,value) => {
    await homePage.entertextfileds(filedKey.toString(),value);
  });
 
  When(/^Select the '([^\"]*)' as '([^\"]*)'$/, async (searchtype, filterkey) => {
    await homePage.filtertheResuts(searchtype.toString(), filterkey.toString());
  });
When(/^Click on Register button$/, async () => {
  await homePage.ClickonRegisterbtn();
});
When(/^Click on Signin button$/, async () => {
 await homePage.clickSigninbtn();
});
Then(/^Welcome to your account meesage is displayed$/, async () =>{
 await homePage.myaccountPageisDisplayed();
});
Then(/^Click on Signout$/, async () =>{
  await homePage.signout();
 });
 When(/^search with$/,  (table: TableDefinition,callback) =>{
   browser.element(by.id("email")).sendKeys("automation@email.com");
   browser.element(by.xpath("//label[contains(text(),'Password')]/following::input[1]")).sendKeys("test@123");
    homePage.clickSigninbtn();
  table.rows().forEach(  async element => {     
    let searchitem=element[0].toString().trim();
   //let password=element[1].toString().trim();  
   await browser.element(by.id("email")).sendKeys(searchitem);
   await browser.element(by.id("email")).click();
   
   
  callback();
   
 });
}
);




When(/^Enter the username and passworddd$/, async(table, dataTable) => {     
  
 
  //await homePage.enterusername(element[0].toString());
 //await  homePage.entertextfileds("Password",element[1].toString());
// await   homePage.clickSigninbtn();
 
let tableRows = dataTable.hashes();
for(let i=0; i<tableRows.length; i++) {
  await  homePage.entertextfileds("Password",tableRows[i]['Column Name'].trim());
 await   homePage.clickSigninbtn();
 // expect(checkboxEle.root.getAttribute('ng-reflect-disabled')).to.eventually.equal(expectedVal);
}
 
});


Then('Enter the username and password', async (isEnabled, dataTable) => {
  let expectedVal = 'true';
  
 
  let tableRows = dataTable.hashes();
for(let i=0; i<tableRows.length; i++) {
  await  homePage.entertextfileds("Password",tableRows[i]['Column Name'].trim());
 await   homePage.clickSigninbtn();
 //expect(checkboxEle.root.getAttribute('ng-reflect-disabled')).to.eventually.equal(expectedVal);
}
});


When(/^Login with$/, async (table: TableDefinition,any)  =>{   
  table.rows().forEach( ement => {     
  //let username=element[0].toString().trim();
  try{
  //let password=element[1].toString().trim();  
  browser.element(by.id("email")).sendKeys(<any>element[0].toString().trim());
   browser.element(by.xpath("//label[contains(text(),'Password')]/following::input[1]")).sendKeys(<any>element[1].toString().trim());
   homePage.clickSigninbtn();
   homePage.signout();
   // callback();
  }
  catch(Exception){
   console.log("handled promise rejection");
 // callback();
  }
  
});

  });
  Then(/^verify user landing page as '([^\"]*)'$/, async(expectedtitle) => {
    let expect = require('chai').expect;
    await browser.getTitle().then(async function (actulatitle) {     
      expect(actulatitle).equal(expectedtitle.toString());
    });

    
  });
 
 
  When(/^Login to the application with '([^\"]*)' and '([^\"]*)'$/, async (username,password) => {
    await homePage.enterusername(username.toString());
    await homePage.enterpassword(password.toString());
    await homePage.clickSigninbtn();
  });

  When(/^Search with the product '([^\"]*)'$/, async (searchkey) => {
    await homePage.searchwithproduct(searchkey.toString());
    await homePage.clickontheproduct(searchkey);
  });

  Then(/^Verify the product$/, async()=>{
    await homePage.addtoCart();
  }); 
When(/^Enter the Email address as'([^\"]*)'$/, async (filedKey) => {
  await homePage.enterusername(filedKey.toString());
})

 