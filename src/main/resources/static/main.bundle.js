webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(route) {
        this.route = route;
        this.isLoginRoute = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (url) {
            _this.isLoginRoute = url.toString().indexOf("login") >= 0;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var userpage_component_1 = __webpack_require__("./src/app/userpage/userpage.component.ts");
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'userpage', component: userpage_component_1.UserpageComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                userpage_component_1.UserpageComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes, { useHash: true })
            ],
            providers: [http_1.HttpClientModule, user_service_service_1.UserServiceService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\n\na {\n  color: #00B7FF;\n}\n\n#login-form {\n  max-width : 600px;\n  min-width: 300px;\n  padding: 15px;\n  background-color : #eee;\n  border-radius: .5em;\n  margin-top: 1em;\n}\n\n/*body {*/\n\n/*!*background: #eee !important;*!*/\n\n/*background-size: cover; !* rescales the image to cover the window *!*/\n\n/*!* shown during image load *!*/\n\n/*background: #464646 url(\"../images/back1.jpg\") repeat-x fixed center center;*/\n\n/*}*/\n\n.wrapper {\n  margin-top: 80px;\n  margin-bottom: 80px;\n}\n\n.form-signin {\n  max-width: 380px;\n  padding: 15px 35px 45px;\n  margin: 0 auto;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.form-signin-heading,\n.checkbox {\n  margin-bottom: 30px;\n}\n\n.checkbox {\n  font-weight: normal;\n}\n\n.form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n}\n\n/*@include box-sizing(border-box);*/\n\n/*&:focus {*/\n\n/*z-index: 2;*/\n\n/*}*/\n\n/*}*/\n\ninput[type=\"text\"] {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\ninput[type=\"password\"] {\n  margin-bottom: 20px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n#background{\n\n  background-image: url('back1.e919ebc6b254b90e6c28.jpg');\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: -1;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"background\">\n  <div id=\"login\" style=\"position: relative; top:200px; \">\n    <div class=\"wrapper\" >\n      <form class=\"form-signin\" target=\"nm_iframe1\">\n        <h2 class=\"form-signin-heading\">Please login</h2>\n        <br>\n        <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Username\"  [(ngModel)]=\"username\"/>\n\n        <input style=\"margin-top: 10px\" type=\"password\" class=\"form-control\"  name=\"password\" placeholder=\"password\" [(ngModel)]=\"password\"/>\n\n        <br>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"login($event)\">Login</button>\n        <label *ngIf=\"invalid1===1\" style=\"color: #873920;\" id=\"invalid1\" >Invalid username/password!</label>\n        <label *ngIf=\"invalid2===1\" style=\"color: #873920; \" id=\"invalid2\">Invalid format of email!</label>\n        <label *ngIf=\"invalid5===1\" style=\"color: #873920; \" id=\"invalid5\">Disabled account!</label>\n      </form>\n\n      <iframe id=\"id_iframe1\" name=\"nm_iframe1\" style=\"display:none;\"></iframe>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.LOGIN_URL = "/login";
        this.invalid1 = 0;
        this.invalid2 = 0;
        this.invalid5 = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.username = "kenny";
        this.password = "123";
        // this.validateUser();
    };
    LoginComponent.prototype.validateUser = function () {
        var _this = this;
        this.http.get("/docstar/api/v1/user").subscribe(function (data) {
            console.log(data);
            if (data.role == "ADMIN") {
                _this.router.navigateByUrl('adminpage');
            }
            else {
                _this.router.navigateByUrl('gamelist');
            }
        }, function (error) {
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.invalid1 = 0;
        this.invalid2 = 0;
        this.invalid5 = 0;
        var credentials = { username: this.username, password: this.password };
        this.http.post(this.LOGIN_URL, credentials, { observe: 'response' })
            .map(function (res) {
            _this.csrf = res.headers.get('CSRF-Token');
            _this.userService.setToken(res.headers.get('CSRF-Token'));
            sessionStorage.setItem("csrf", _this.csrf);
            console.log(_this.csrf);
            return res.body;
        })
            .subscribe(function (data) {
            console.log(data);
            _this.userService.setUser(data);
            sessionStorage.setItem("user", JSON.stringify(data));
            // if(data.role=="ADMIN"){
            //   this.router.navigateByUrl( 'adminpage');
            // }else{
            //   this.router.navigateByUrl( 'gamelist');
            // }
            _this.router.navigateByUrl('userpage');
        }, function (error) {
            console.log(error);
            if (error.error == "Forbidden") {
                _this.invalid1 = 1;
            }
            else if (error.error == "Disabled") {
                _this.invalid5 = 1;
            }
            else {
                _this.invalid1 = 1;
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "username", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, user_service_service_1.UserServiceService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/user-service.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var UserServiceService = /** @class */ (function () {
    function UserServiceService() {
    }
    UserServiceService.prototype.setUser = function (user) {
        this.user = user;
    };
    UserServiceService.prototype.setToken = function (csrf) {
        this.csrf = csrf;
    };
    UserServiceService.prototype.getUser = function () {
        return this.user;
    };
    UserServiceService.prototype.getToken = function () {
        return this.csrf;
    };
    UserServiceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UserServiceService);
    return UserServiceService;
}());
exports.UserServiceService = UserServiceService;


/***/ }),

/***/ "./src/app/userpage/userpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userpage/userpage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  userpage works!\n</p>\n"

/***/ }),

/***/ "./src/app/userpage/userpage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var UserpageComponent = /** @class */ (function () {
    function UserpageComponent() {
    }
    UserpageComponent.prototype.ngOnInit = function () {
    };
    UserpageComponent = __decorate([
        core_1.Component({
            selector: 'app-userpage',
            template: __webpack_require__("./src/app/userpage/userpage.component.html"),
            styles: [__webpack_require__("./src/app/userpage/userpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserpageComponent);
    return UserpageComponent;
}());
exports.UserpageComponent = UserpageComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map