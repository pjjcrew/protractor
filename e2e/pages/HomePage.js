"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var protractor_1 = require("protractor");
var BasePage_1 = require("./BasePage");
var config_1 = require("../Configfiles/config");
var Locators = {
    Signinbtn: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: "a.login"
    },
    emailaddress: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Id],
        value: "email_create"
    },
    createanaccount: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "(.//*[normalize-space(text()) and normalize-space(.)='Create an account'])[1]/following::span[1]"
    },
    Gender_mr: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Id],
        value: "id_gender1"
    },
    Registerbtn: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: "#submitAccount > span"
    },
    Loginbtn: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//button[@id='SubmitLogin']/span"
    },
    HomeMenu: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//span[contains(text(),'My credit slips')]"
    },
    username: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "(.//*[normalize-space(text()) and normalize-space(.)='Email address'])[2]/following::input[1]"
    },
    password: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Id],
        value: "passwd"
    },
    signout: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: "a.logout"
    },
    searchbar: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//a[@title='My Store']/following::input[@placeholder='Search']"
    },
    searchbtn: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//button[(@name='submit_search')]"
    },
    addtocart: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//a[@title='Close']"
    },
};
var EC = protractor_1.protractor.ExpectedConditions;
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.OpenBrowser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.get(config_1.config.baseUrl)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getCapabilities()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.manage().getCookies()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.clickonSignin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ElementLocator(Locators.Signinbtn).click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.enteremail = function (emailid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ElementLocator(Locators.emailaddress).sendKeys(emailid)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.clickoncreateaccountbtn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ElementLocator(Locators.createanaccount).click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.selecttile = function (title) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ElementLocator(Locators.Gender_mr).click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.entertextfileds = function (filedKey, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//label[contains(text(),'" + filedKey + "')]/following::input[1]")).clear()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//label[contains(text(),'" + filedKey + "')]/following::input[1]")).sendKeys(value)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.filtertheResuts = function (filtertype, filterkey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//label[contains(text(),'" + filtertype + "')]/following::select[1]/option[text()='" + filterkey + "']")).click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ClickonRegisterbtn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ElementLocator(Locators.Registerbtn).click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.clickSigninbtn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ElementLocator(Locators.Loginbtn).click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.myaccountPageisDisplayed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ElementLocator(Locators.HomeMenu).isDisplayed()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.signout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ElementLocator(Locators.signout).click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.enterusername = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ElementLocator(Locators.username).clear()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.ElementLocator(Locators.username).sendKeys(username)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.clickontheproduct = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'Showing')]/following::img[@alt='" + product + "']")).click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.searchwithproduct = function (searchkey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.sleep(5000);
                        return [4 /*yield*/, this.ElementLocator(Locators.searchbtn).click()];
                    case 1:
                        _a.sent();
                        //await this.ElementLocator(Locators.searchbar).clear();
                        return [4 /*yield*/, this.ElementLocator(Locators.searchbar).sendKeys(searchkey)];
                    case 2:
                        //await this.ElementLocator(Locators.searchbar).clear();
                        _a.sent();
                        return [4 /*yield*/, this.ElementLocator(Locators.searchbtn).click()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.addtoCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ElementLocator(Locators.addtocart).click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.enterpassword = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ElementLocator(Locators.password).clear()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.ElementLocator(Locators.password).sendKeys(password)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.navigate().back()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HomePage;
}(BasePage_1.BasePage));
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map