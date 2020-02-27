"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var HomePage_1 = require("../pages/HomePage");
var protractor_1 = require("protractor");
var homePage = new HomePage_1.HomePage();
cucumber_1.Given(/^Launch the application$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.OpenBrowser()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Given(/^Click on the sign in link$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.clickonSignin()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Enter Email address as '([^\"]*)'$/, function (emailid) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.enteremail(emailid.toString())];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^navigate back to home$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.navigateBack()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Click on create an account$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.clickoncreateaccountbtn()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Select title as '([^\"]*)'$/, function (title) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.selecttile(title.toString())];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Enter the '([^\"]*)' as '([^\"]*)'$/, function (filedKey, value) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.entertextfileds(filedKey.toString(), value)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Select the '([^\"]*)' as '([^\"]*)'$/, function (searchtype, filterkey) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.filtertheResuts(searchtype.toString(), filterkey.toString())];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Click on Register button$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.ClickonRegisterbtn()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Click on Signin button$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.clickSigninbtn()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Welcome to your account meesage is displayed$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.myaccountPageisDisplayed()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Click on Signout$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.signout()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^search with$/, function (table, callback) {
    protractor_1.browser.element(protractor_1.by.id("email")).sendKeys("automation@email.com");
    protractor_1.browser.element(protractor_1.by.xpath("//label[contains(text(),'Password')]/following::input[1]")).sendKeys("test@123");
    homePage.clickSigninbtn();
    table.rows().forEach(function (element) { return __awaiter(void 0, void 0, void 0, function () {
        var searchitem;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    searchitem = element[0].toString().trim();
                    //let password=element[1].toString().trim();  
                    return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.id("email")).sendKeys(searchitem)];
                case 1:
                    //let password=element[1].toString().trim();  
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.id("email")).click()];
                case 2:
                    _a.sent();
                    callback();
                    return [2 /*return*/];
            }
        });
    }); });
});
cucumber_1.When(/^Enter the username and passworddd$/, function (table, dataTable) { return __awaiter(void 0, void 0, void 0, function () {
    var tableRows, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tableRows = dataTable.hashes();
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < tableRows.length)) return [3 /*break*/, 5];
                return [4 /*yield*/, homePage.entertextfileds("Password", tableRows[i]['Column Name'].trim())];
            case 2:
                _a.sent();
                return [4 /*yield*/, homePage.clickSigninbtn()];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 1];
            case 5: return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('Enter the username and password', function (isEnabled, dataTable) { return __awaiter(void 0, void 0, void 0, function () {
    var expectedVal, tableRows, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expectedVal = 'true';
                tableRows = dataTable.hashes();
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < tableRows.length)) return [3 /*break*/, 5];
                return [4 /*yield*/, homePage.entertextfileds("Password", tableRows[i]['Column Name'].trim())];
            case 2:
                _a.sent();
                return [4 /*yield*/, homePage.clickSigninbtn()];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 1];
            case 5: return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Login with$/, function (table, any) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        table.rows().forEach(function (ement) {
            //let username=element[0].toString().trim();
            try {
                //let password=element[1].toString().trim();  
                protractor_1.browser.element(protractor_1.by.id("email")).sendKeys(protractor_1.element[0].toString().trim());
                protractor_1.browser.element(protractor_1.by.xpath("//label[contains(text(),'Password')]/following::input[1]")).sendKeys(protractor_1.element[1].toString().trim());
                homePage.clickSigninbtn();
                homePage.signout();
                // callback();
            }
            catch (Exception) {
                console.log("handled promise rejection");
                // callback();
            }
        });
        return [2 /*return*/];
    });
}); });
cucumber_1.Then(/^verify user landing page as '([^\"]*)'$/, function (expectedtitle) { return __awaiter(void 0, void 0, void 0, function () {
    var expect;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expect = require('chai').expect;
                return [4 /*yield*/, protractor_1.browser.getTitle().then(function (actulatitle) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                expect(actulatitle).equal(expectedtitle.toString());
                                return [2 /*return*/];
                            });
                        });
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Login to the application with '([^\"]*)' and '([^\"]*)'$/, function (username, password) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.enterusername(username.toString())];
            case 1:
                _a.sent();
                return [4 /*yield*/, homePage.enterpassword(password.toString())];
            case 2:
                _a.sent();
                return [4 /*yield*/, homePage.clickSigninbtn()];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Search with the product '([^\"]*)'$/, function (searchkey) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.searchwithproduct(searchkey.toString())];
            case 1:
                _a.sent();
                return [4 /*yield*/, homePage.clickontheproduct(searchkey)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Verify the product$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.addtoCart()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Enter the Email address as'([^\"]*)'$/, function (filedKey) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.enterusername(filedKey.toString())];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=HomeSteps.js.map