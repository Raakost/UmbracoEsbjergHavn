webpackJsonp([5],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UmbracoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UmbracoServiceProvider = /** @class */ (function () {
    function UmbracoServiceProvider(http) {
        this.http = http;
        this._contentUrl = 'http://havnen150.dk/umbraco/api/home/getcontent?lang=';
        this._fpUrl = 'http://havnen150.dk/umbraco/api/home/GetHomePageModel?lang=';
    }
    UmbracoServiceProvider.prototype.getContent = function (language) {
        return this.http.get(this._contentUrl + language).map(function (result) {
            return result;
        });
    };
    UmbracoServiceProvider.prototype.getFrontPageContent = function (language) {
        return this.http.get(this._fpUrl + language).map(function (result) {
            return result;
        });
    };
    UmbracoServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UmbracoServiceProvider);
    return UmbracoServiceProvider;
}());

//# sourceMappingURL=umbraco-service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(viewCtrl, translateService) {
        this.viewCtrl = viewCtrl;
        this.translateService = translateService;
    }
    SettingsPage.prototype.changeLanguage = function (language) {
        this.translateService.use(language);
        this.viewCtrl.dismiss();
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\settings\settings.html"*/'<ion-list>\n\n  <button ion-item (click)="changeLanguage(\'da\')">\n\n    <img style="width: 1em;" src="assets/icon/da.png">\n\n    {{\'DA\' | translate}}\n\n  </button>\n\n    <button ion-item (click)="changeLanguage(\'en\')">\n\n      <img style="width: 1em;" src="assets/icon/en.png">\n\n      {{\'EN\' | translate}}\n\n    </button>\n\n</ion-list>\n\n'/*ion-inline-end:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
    function TabContentPage(navParams) {
        this.navParams = navParams;
        this.tabContent = navParams.data;
    }
    TabContentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabContentPage');
    };
    TabContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-content',template:/*ion-inline-start:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tab-content\tab-content.html"*/'<!-- Page Header -->\n\n<ion-header>\n\n</ion-header>\n\n\n\n<!-- Page Content -->\n\n<ion-content padding>\n\n  <ion-card *ngFor="let item of tabContent" style="border-radius:2px;">\n\n    <img src="{{item.Img}}"/>\n\n    <ion-card-content>\n\n      <!--<ion-card-title>{{item.Title}}</ion-card-title>-->\n\n      <p>{{item.Text}}</p>\n\n      <div *ngIf="item.Video">\n\n        <a href="{{item.Video}}">{{\'VIDEO-LINK\' | translate}}</a>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card style="box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);">\n\n    <button color="dark-blue" hidden ion-button full>Klik her for at se hele interviewet!</button>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tab-content\tab-content.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabContentPage);
    return TabContentPage;
}());

//# sourceMappingURL=tab-content.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabMapPage = /** @class */ (function () {
    function TabMapPage(navParams, googleMaps, plt, nav) {
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.plt = plt;
        this.nav = nav;
        this.mapUrl = undefined;
        this.mapUrl = navParams.data;
        console.log(this.mapUrl);
    }
    TabMapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabMapPage');
    };
    TabMapPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.plt.ready().then(function () {
            _this.initMap();
        });
    };
    TabMapPage.prototype.initMap = function () {
        var map = this.googleMaps.create(this.element.nativeElement);
        map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function (data) {
            var coordinates = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](33.6396965, -84.4304574);
            var position = {
                target: coordinates,
                zoom: 17
            };
            map.animateCamera(position);
            var markerOptions = {
                position: coordinates,
                icon: "assets/images/icons8-Marker-64.png",
                title: 'Our first POI'
            };
            var marker = map.addMarker(markerOptions)
                .then(function (marker) {
                marker.showInfoWindow();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", Object)
    ], TabMapPage.prototype, "element", void 0);
    TabMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tab-map',template:/*ion-inline-start:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tab-map\tab-map.html"*/'<!--<ion-content padding>\n<img src="https://www.dropbox.com/s/9jtqkcl6gmc4m9h/kort.PNG?dl=1"/>\n  <div style="padding: 0px;" *ngIf="mapUrl">\n    <img src={{mapUrl.Map}}>\n  </div>\n</ion-content>-->\n<ion-content>\n  <div #map style="height:100%;"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tab-map\tab-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */]])
    ], TabMapPage);
    return TabMapPage;
}());

//# sourceMappingURL=tab-map.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(220);
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
    function TabHomePage(navParams, launchNavigator) {
        this.navParams = navParams;
        this.launchNavigator = launchNavigator;
        this.tabHomeContent = undefined;
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
    TabHomePage.prototype.Navigation = function () {
        var lat = 55.4666;
        var long = 8.4615;
        var havneCoords = lat.toString() + ", " + long.toString();
        this.launchNavigator.navigate(havneCoords);
    };
    TabHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-home',template:/*ion-inline-start:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tab-home\tab-home.html"*/'<!-- Page Header -->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n<!-- Page content -->\n\n<ion-content class="no-padding" *ngIf="tabHomeContent">\n\n  <div class="img-container">\n\n  <div id="container1" class="twentytwenty-container">\n\n    <img (load)="initTwenty()" src={{tabHomeContent.BeforeImg}}>\n\n    <img (load)="initTwenty()" src={{tabHomeContent.NowImg}}>\n\n    </div>\n\n  </div>\n\n  <p style="padding-right: 16px; padding-left: 16px;">{{tabHomeContent.Text}}</p>\n\n  <div>\n\n    <button style="background-color: transparent;\n\n                   text-decoration: underline;\n\n                   color: #488aff;\n\n                   line-height: 1.5;\n\n                   font-size: 1.5rem;\n\n                   float: right;\n\n                   padding-right: 16px;"\n\n            (click)="Navigation()">{{\'DIRECTIONS\' | translate}}</button>\n\n    <ion-icon style="float: right;\n\n                     line-height: 1.5;\n\n                     text-decoration: underline;\n\n                     color: #488aff;"\n\n              name="map"></ion-icon>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tab-home\tab-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], TabHomePage);
    return TabHomePage;
}());

//# sourceMappingURL=tab-home.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_content_tab_content__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_home_tab_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_map_tab_map__ = __webpack_require__(160);
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
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.homeTab = __WEBPACK_IMPORTED_MODULE_3__tab_home_tab_home__["a" /* TabHomePage */];
        this.presentTab = __WEBPACK_IMPORTED_MODULE_2__tab_content_tab_content__["a" /* TabContentPage */];
        this.pastTab = __WEBPACK_IMPORTED_MODULE_2__tab_content_tab_content__["a" /* TabContentPage */];
        this.mapTab = __WEBPACK_IMPORTED_MODULE_4__tab_map_tab_map__["a" /* TabMapPage */];
        this.page = navParams.data;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tabs\tabs.html"*/'<!-- Page Header -->\n\n<ion-header>\n\n  <ion-navbar *ngIf="page" color="dark-blue">\n\n    <ion-title style="font-family:roboto sans-serif, Arima Madurai;">{{page.Title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- Page Content -->\n\n<ion-content padding *ngIf="page">\n\n  <ion-tabs tabsPlacement="bottom" color="dark-blue">\n\n    <ion-tab [root]="homeTab" [rootParams]="page.HomePage" tabTitle="{{\'TAB_ABOUT\' | translate}}"></ion-tab>\n\n    <ion-tab [root]="presentTab" [rootParams]="page.PresentList" tabTitle="{{ \'TAB_MEMORY\' | translate}}"></ion-tab>\n\n    <ion-tab [root]="pastTab" [rootParams]="page.PastList"  tabTitle="{{\'TAB_HISTORY\' | translate}}"></ion-tab>\n\n    <ion-tab [root]="mapTab" [rootParams]="page.Map"  tabTitle="{{\'TAB_MAP\' | translate}}"></ion-tab>\n\n  </ion-tabs>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 172:
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
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/settings/settings.module": [
		684,
		4
	],
	"../pages/tab-content/tab-content.module": [
		685,
		3
	],
	"../pages/tab-home/tab-home.module": [
		687,
		2
	],
	"../pages/tab-map/tab-map.module": [
		686,
		1
	],
	"../pages/tabs/tabs.module": [
		688,
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
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_umbraco_service_umbraco_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(73);
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
    function HomePage(service, translateService) {
        var _this = this;
        this.service = service;
        this.translateService = translateService;
        this.getFrontPageContent();
        translateService.onLangChange.subscribe(function (event) {
            _this.getFrontPageContent(event.lang);
        });
    }
    HomePage.prototype.getFrontPageContent = function (language) {
        var _this = this;
        if (!language) {
            language = this.translateService.getDefaultLang();
        }
        this.service.getFrontPageContent(language).subscribe(function (frontPage) {
            _this.content = frontPage;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\home\home.html"*/'<!-- Page Header -->\n\n<ion-header>\n\n  <ion-navbar color="dark-blue">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title style="font-family: roboto sans-serif, Arima Madurai;">{{\'APP_TITLE\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- Page Content -->\n\n<ion-content *ngIf="content">\n\n    <img src={{content.Img}}>\n\n  <h4 style="padding-left: 16px; padding-right: 16px;">{{content.Title}}</h4>\n\n  <p style="padding-left: 16px; padding-right: 16px;">{{content.Text}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_umbraco_service_umbraco_service__["a" /* UmbracoServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tab_content_tab_content__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tab_home_tab_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_launch_navigator__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_umbraco_service_umbraco_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_mock_service_mock_service__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tab_map_tab_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_maps__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















function setTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
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
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tab_map_tab_map__["a" /* TabMapPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-content/tab-content.module#TabContentPageModule', name: 'TabContentPage', segment: 'tab-content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-map/tab-map.module#TabMapPageModule', name: 'TabMapPage', segment: 'tab-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-home/tab-home.module#TabHomePageModule', name: 'TabHomePage', segment: 'tab-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (setTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tab_home_tab_home__["a" /* TabHomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tab_content_tab_content__["a" /* TabContentPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tab_map_tab_map__["a" /* TabMapPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_umbraco_service_umbraco_service__["a" /* UmbracoServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_mock_service_mock_service__["a" /* MockServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_maps__["a" /* GoogleMaps */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_umbraco_service_umbraco_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(73);
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
    function MyApp(platform, statusBar, splashScreen, service, popoverCtrl, translateService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.service = service;
        this.popoverCtrl = popoverCtrl;
        this.translateService = translateService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.locations = [];
        translateService.setDefaultLang('da');
        this.initializeApp();
        this.chosenLang = translateService.getDefaultLang();
        this.startApp();
    }
    MyApp.prototype.presentPopover = function (optionsEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */]);
        popover.present({
            ev: optionsEvent
        });
        this.translateService.onLangChange.subscribe(function (event) {
            _this.service.getContent(event.lang);
            _this.chosenLang = _this.translateService.currentLang;
            console.log(_this.chosenLang);
            _this.startApp();
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 500);
        });
    };
    MyApp.prototype.startApp = function () {
        var _this = this;
        this.service.getContent(this.chosenLang).subscribe(function (result) {
            _this.locations = result;
            var locationPages = [];
            for (var i = 0; i < _this.locations.length; i++) {
                var cur = _this.locations[i];
                locationPages.push({ title: cur.Title, component: __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */], data: cur });
            }
            _this.pages = locationPages;
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component, page.data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\app\app.html"*/'\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color="dark-blue">\n\n      <div class="row">\n\n      <ion-title style="font-family: roboto sans-serif, Arima Madurai;">{{\'LOCATION\' | translate}}</ion-title>\n\n      <button icon-only (click)="presentPopover($event)" style="background-color: transparent;">\n\n        <div *ngIf="chosenLang == \'da\'">\n\n          <img style="width: 2.4em;" src="assets/icon/daEn.png">\n\n        </div>\n\n        <div *ngIf="chosenLang == \'en\'">\n\n          <img style="width: 2.4em;" src="assets/icon/enDa.png">\n\n        </div>\n\n      </button>\n\n      </div>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Jeane\Documents\Github\Ionic\EsbjergHavn\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_umbraco_service_umbraco_service__["a" /* UmbracoServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
        /*this.past = new PastPresentModel(
          1,
          'Fortid - En titel',
          'En lille beskrivelse til billedet...',
          'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg',
          'https://www.youtube.com/watch?v=WCAKM2bivqo');
    
        this.present = new PastPresentModel(
          2,
          'Nutid - En titel',
          'En lille beskrivelse til billedet...',
          'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg',
          'https://www.youtube.com/watch?v=WCAKM2bivqo');
    
        this.past1 = new PastPresentModel(
          1,
          'Fortid - En titel (2)',
          'En lille beskrivelse til billedet...',
          'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg');
    
        this.present1 = new PastPresentModel(
          2,
          'Nutid - En titel (2)',
          'En lille beskrivelse til billedet...',
          'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg');
    
        this.pastImagesList = [this.past, this.past1];
        this.presentImagesList = [this.present, this.present1];
    
        this.tabHomePage = new TabsHomePageModel(
          1,
          'En lille beskrivelse af dette område....',
          'https://dummyimage.com/600x400/c3c3c3/ffffff.jpg',
          'https://dummyimage.com/600x400/f1f1f1/ffffff.jpg',
          123467,
          7654321);
    
        this.tabContent = new TabsContentModel(1, this.tabHomePage, this.presentImagesList, this.pastImagesList);
    
        this.pages = [
          {title: 'Fiskeri- og Søfarts Museet', component: TabsPage, data: this.tabContent},
          {title: 'Mennesket ved Havet', component: TabsPage, data: this.tabContent},
          {title: 'Esbjerg Strand', component: TabsPage, data: this.tabContent},
          {title: 'Nordhavn', component: TabsPage, data: this.tabContent}
        ];
    
        this.homePage = new HomePageModel(
          1,
          'Appens formål',
          'En beskrivelse af appens formål, evt et kort med alle placeringer markeret på et kort.',
          'https://www.dropbox.com/s/g1bn8rqzubojssn/esbjerghavn.JPG?dl=1',
          [this.tabContent]
        );*/
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

},[352]);
//# sourceMappingURL=main.js.map