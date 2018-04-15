webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabContentPage = /** @class */ (function () {
    function TabContentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabContent = navParams.data;
    }
    TabContentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabContentPage');
    };
    TabContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-content',template:/*ion-inline-start:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tab-content\tab-content.html"*/'<!-- Page Header -->\n\n<ion-header>\n\n</ion-header>\n\n\n\n<!-- Page Content -->\n\n<ion-content padding>\n\n  <ion-card *ngFor="let item of tabContent">\n\n    <img src="{{item.Img}}"/>\n\n    <ion-card-content>\n\n      <ion-card-title>{{item.Title}}</ion-card-title>\n\n      <p>{{item.Text}}</p>\n\n      <div *ngIf="item.Video">\n\n        <a href="{{item.Video}}">Click meeeee</a>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card style="box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);">\n\n    <button ion-button full>Klik her for at se hele interviewet!</button>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tab-content\tab-content.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabContentPage);
    return TabContentPage;
}());

//# sourceMappingURL=tab-content.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabHomePage = /** @class */ (function () {
    function TabHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabHomeContent = navParams.data;
    }
    TabHomePage.prototype.initTwenty = function () {
        $("#container1").twentytwenty();
        // Mesure your images and divide by 2.
        var imgWidth = $("#container1 img").width() / 2;
        // On the container, apply a left offset of 50% (screen center) - minus half image width.
        $("#container1").css({ "position": "relative", "left": "calc(50% - " + imgWidth + "px)" });
        //$("#container1").twentytwenty();
    };
    TabHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabHomePage');
    };
    TabHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-home',template:/*ion-inline-start:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tab-home\tab-home.html"*/'<!-- Page Header -->\n\n<ion-header>\n\n</ion-header>\n\n\n\n<!-- Page content -->\n\n<ion-content class="no-padding">\n\n  <div class="img-container">\n\n  <div id="container1" class="twentytwenty-container">\n\n    <img (load)="initTwenty()" src={{tabHomeContent.SlideImg1}}>\n\n    <img (load)="initTwenty()" src={{tabHomeContent.SlideImg2}}>\n\n    </div>\n\n  </div>\n\n  <p style="padding-right: 16px; padding-left: 16px;">{{tabHomeContent.Text}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tab-home\tab-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabHomePage);
    return TabHomePage;
}());

//# sourceMappingURL=tab-home.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_content_tab_content__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_home_tab_home__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeTab = __WEBPACK_IMPORTED_MODULE_3__tab_home_tab_home__["a" /* TabHomePage */];
        this.presentTab = __WEBPACK_IMPORTED_MODULE_2__tab_content_tab_content__["a" /* TabContentPage */];
        this.pastTab = __WEBPACK_IMPORTED_MODULE_2__tab_content_tab_content__["a" /* TabContentPage */];
        this.page = navParams.get('data');
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tabs\tabs.html"*/'<!-- Page Header -->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{page.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- Page Content -->\n<ion-content padding>\n  <ion-tabs tabsPlacement="bottom">\n    <ion-tab [root]="homeTab" [rootParams]="page.data.HomePage" tabTitle="Om"></ion-tab>\n    <ion-tab [root]="presentTab" [rootParams]="page.data.PresentList" tabTitle="Erindringer"></ion-tab>\n    <ion-tab [root]="pastTab" [rootParams]="page.data.PastList"  tabTitle="Historie"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/tab-content/tab-content.module": [
		284,
		2
	],
	"../pages/tab-home/tab-home.module": [
		285,
		1
	],
	"../pages/tabs/tabs.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mock_service_mock_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.content = service.getHomePage();
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\home\home.html"*/'<!-- Page Header -->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Havnens Historie</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- Page Content -->\n\n<ion-content>\n\n    <img src={{content.Img}}>\n\n  <h4 style="padding-left: 16px; padding-right: 16px;">{{content.Title}}</h4>\n\n  <p style="padding-left: 16px; padding-right: 16px;">{{content.Text}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_mock_service_mock_service__["a" /* MockServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tab_content_tab_content__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tab_home_tab_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_umbraco_service_umbraco_service__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_mock_service_mock_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tab_content_tab_content__["a" /* TabContentPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tab_home_tab_home__["a" /* TabHomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/tab-content/tab-content.module#TabContentPageModule', name: 'TabContentPage', segment: 'tab-content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-home/tab-home.module#TabHomePageModule', name: 'TabHomePage', segment: 'tab-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tab_home_tab_home__["a" /* TabHomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tab_content_tab_content__["a" /* TabContentPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_umbraco_service_umbraco_service__["a" /* UmbracoServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_mock_service_mock_service__["a" /* MockServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mock_service_mock_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, mockService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.mockService = mockService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = mockService.getMenuItems();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        //this.nav.setRoot(page.component);
        this.nav.push(page.component, { data: page });
        console.log(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_mock_service_mock_service__["a" /* MockServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsContentModel; });
var TabsContentModel = /** @class */ (function () {
    function TabsContentModel(id, homePage, presentList, pastList, video) {
        this.Id = id;
        this.HomePage = homePage;
        this.PresentList = presentList;
        this.PastList = pastList;
        this.Video = video;
    }
    return TabsContentModel;
}());

//# sourceMappingURL=TabsContentModel.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastPresentModel; });
var PastPresentModel = /** @class */ (function () {
    function PastPresentModel(id, title, text, img, video) {
        this.Id = id;
        this.Title = title;
        this.Img = img;
        this.Text = text;
        this.Video = video;
    }
    return PastPresentModel;
}());

//# sourceMappingURL=PastPresentModel.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsHomePageModel; });
var TabsHomePageModel = /** @class */ (function () {
    function TabsHomePageModel(id, text, slideImg1, slideImg2, longitude, latitude) {
        this.Id = id;
        this.Text = text;
        this.SlideImg1 = slideImg1;
        this.SlideImg2 = slideImg2;
        this.Longitude = longitude;
        this.Latitude = latitude;
    }
    return TabsHomePageModel;
}());

//# sourceMappingURL=TabsHomePageModel.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModel; });
var HomePageModel = /** @class */ (function () {
    function HomePageModel(id, title, text, img) {
        this.Id = id;
        this.Title = title;
        this.Text = text;
        this.Img = img;
    }
    return HomePageModel;
}());

//# sourceMappingURL=HomePageModel.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UmbracoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UmbracoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UmbracoServiceProvider = /** @class */ (function () {
    function UmbracoServiceProvider(http) {
        this.http = http;
        console.log('Hello UmbracoServiceProvider Provider');
    }
    UmbracoServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UmbracoServiceProvider);
    return UmbracoServiceProvider;
}());

//# sourceMappingURL=umbraco-service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_TabsContentModel__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_PastPresentModel__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_TabsHomePageModel__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_HomePageModel__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MockServiceProvider = /** @class */ (function () {
    function MockServiceProvider(http) {
        this.http = http;
        this.homePage = new __WEBPACK_IMPORTED_MODULE_6__models_HomePageModel__["a" /* HomePageModel */](1, 'Appens formål', 'En beskrivelse af appens formål, evt et kort med alle placeringer markeret på et kort.', 'https://www.dropbox.com/s/g1bn8rqzubojssn/esbjerghavn.JPG?dl=1');
        this.past = new __WEBPACK_IMPORTED_MODULE_4__models_PastPresentModel__["a" /* PastPresentModel */](1, 'Fortid - En titel', 'En lille beskrivelse til billedet...', 'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg', 'https://www.youtube.com/watch?v=WCAKM2bivqo');
        this.present = new __WEBPACK_IMPORTED_MODULE_4__models_PastPresentModel__["a" /* PastPresentModel */](2, 'Nutid - En titel', 'En lille beskrivelse til billedet...', 'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg', 'https://www.youtube.com/watch?v=WCAKM2bivqo');
        this.past1 = new __WEBPACK_IMPORTED_MODULE_4__models_PastPresentModel__["a" /* PastPresentModel */](1, 'Fortid - En titel (2)', 'En lille beskrivelse til billedet...', 'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg');
        this.present1 = new __WEBPACK_IMPORTED_MODULE_4__models_PastPresentModel__["a" /* PastPresentModel */](2, 'Nutid - En titel (2)', 'En lille beskrivelse til billedet...', 'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg');
        this.pastImagesList = [this.past, this.past1];
        this.presentImagesList = [this.present, this.present1];
        this.tabHomePage = new __WEBPACK_IMPORTED_MODULE_5__models_TabsHomePageModel__["a" /* TabsHomePageModel */](1, 'En lille beskrivelse af dette område....', 'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg', 'https://dummyimage.com/600x400/f1f1f1/ffffff.jpg', 123467, 7654321);
        this.tabContent = new __WEBPACK_IMPORTED_MODULE_3__models_TabsContentModel__["a" /* TabsContentModel */](1, this.tabHomePage, this.presentImagesList, this.pastImagesList, 'https://www.youtube.com/watch?v=WCAKM2bivqo');
        this.pages = [
            { title: 'Fiskeri- og Søfarts Museet', component: __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */], data: this.tabContent },
            { title: 'Mennesket ved Havet', component: __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */], data: this.tabContent },
            { title: 'Esbjerg Strand', component: __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */], data: this.tabContent },
            { title: 'Nordhavn', component: __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */], data: this.tabContent }
        ];
    }
    ;
    // Get tabs component and title for sidemenu navigation.
    MockServiceProvider.prototype.getMenuItems = function () {
        return this.pages;
    };
    // Get content for homepage (the app's frontpage..)
    MockServiceProvider.prototype.getHomePage = function () {
        return this.homePage;
    };
    MockServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MockServiceProvider);
    return MockServiceProvider;
}());

//# sourceMappingURL=mock-service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map