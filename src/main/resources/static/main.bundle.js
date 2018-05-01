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

/***/ "./src/app/adminpage/adminpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/adminpage/adminpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page3\">\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n        <ul class=\"nav navbar-nav\">\n\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Adminname<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">Edit</a></li>\n            </ul>\n          </li>\n          <li><a href=\"#\">User</a></li>\n        </ul>\n        <button type=\"button\" class=\"btn btn-default navbar-btn navbar-right\" style=\"margin-right: 20px\" (click)=\"logout()\">Log Out</button>-->\n\n      </div>\n    </div>\n  </nav>\n  <br>\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <div style=\"margin-top: 10px\">\n\n      <div class=\"col-md-4 col-md-offset-3\">\n        <label>Type</label>\n        <select class=\"form-control\" id=\"dtype\" name=\"dtype\"  [(ngModel)]=\"dtype\" (ngModelChange)=\"onTypeChange($event)\">\n          <!--<option value={{font.category}}>{{font.category}}</option>-->\n          <!--<option value={{font.category}}>{{font.category}}</option>-->\n          <option value=\"\" disabled selected>Select your Type</option>\n          <option value=\"RULE\">rule</option>\n          <option value=\"PRORULE\">prorule</option>\n          <option value=\"NOTICE\">notice</option>\n          <option value=\"PRESDOCU\">presdocu</option>\n          <!--<option *ngFor=\"let list of levelslist\">{{list.name}}</option>-->\n        </select>\n\n      </div>\n      <div class=\"form-group col-md-4 col-md-offset-3 \">\n        <label>Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Document Tile\" [(ngModel)]=\"title\">\n      </div>\n      <div class=\"form-group col-md-4 col-md-offset-3 \">\n        <label>Zipcode</label>\n        <input type=\"text\" class=\"form-control\" id=\"zipcode\" placeholder=\"Zipcode\" [(ngModel)]=\"zipcode\">\n      </div>\n      <div class=\"form-group col-md-4 col-md-offset-3\">\n        <input type=\"checkbox\" id=\"significance\"  (change)=\"toggleSignificance($event)\"> Significance\n        <input type=\"checkbox\" id=\"reviewed\"  (change)=\"toggleReviewed($event)\" style=\"margin-left: 20px\"> Reviewed\n\n      </div>\n      <div class=\"form-group col-md-4 col-md-offset-3\">\n\n        <button type=\"submit\" (click)=\"searchDocument()\" class=\"btn btn-primary\">Search</button>\n        <button type=\"submit\" (click)=\"refreshTable()\" style=\"margin-left: 20px\" class=\"btn btn-primary\">Refresh</button>\n\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <table class=\"table table-bordered\" style=\"width:100%\" id=\"userList\" >\n      <thead>\n      <tr>\n        <th>First-name</th>\n        <th>Last-name</th>\n        <th>Email</th>\n        <th>Role</th>\n        <th>Enabled Status</th>\n      </tr>\n      </thead>\n      <tbody id=\"userTB\">\n      <tr *ngFor=\"let document of documents\" (click)=\"viewDocument($event)\" style=\"cursor: pointer;\" id={{user._id}}>\n        <td>{{user.name.first}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/adminpage/adminpage.component.ts":
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
var AdminpageComponent = /** @class */ (function () {
    function AdminpageComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
    }
    AdminpageComponent.prototype.ngOnInit = function () {
        this.validateUser();
    };
    AdminpageComponent.prototype.onTypeChange = function (value) {
        this.selectedType = value;
        console.log(this.selectedType);
    };
    AdminpageComponent.prototype.toggleSignificance = function (event) {
        if (event.target.checked) {
            this.significance = "1";
        }
        else {
            this.significance = "0";
        }
    };
    AdminpageComponent.prototype.toggleReviewed = function (event) {
        if (event.target.checked) {
            this.reviewed = true;
        }
        else {
            this.reviewed = false;
        }
    };
    AdminpageComponent.prototype.validateUser = function () {
        var _this = this;
        this.http.get("/docstar/api/v1/user").subscribe(function (data) {
            console.log(data);
            if (data.roles.length > 1) {
                _this.router.navigateByUrl('adminpage');
            }
            else if (data.roles.length == 1 && data.roles[0] == "USER") {
                _this.router.navigateByUrl('userpage');
            }
        }, function (error) {
            _this.router.navigateByUrl('login');
        });
    };
    AdminpageComponent.prototype.refreshTable = function () {
        this.retrieveUsers();
    };
    AdminpageComponent.prototype.retrieveUsers = function () {
        // this.filter='';
        // this.http.get("/wordgame/api/admins/v3/users").subscribe(
        //   data => {
        //     console.log("users:"+data);
        //     this.users = data;
        //   }
        // );
    };
    AdminpageComponent.prototype.searchDocument = function () {
        // var search={"search":this.filter};
        // console.log(search);
        // this.http.post("/wordgame/api/admins/v3/search",search).subscribe(
        //   data => {
        //     console.log("users:"+data);
        //     this.users = data;
        //   }
        // );
        // this.filter = '';
    };
    AdminpageComponent.prototype.viewDocument = function (event) {
        // if(event=="create"){
        //   this.router.navigate(['createuser']);
        // }else{
        //   // console.log("row id:"+event.target)
        //   var uid=event.currentTarget.id;
        //
        //   this.http.get( "/wordgame/api/admins/v3/"+uid,{} ).subscribe(
        //     data => {
        //       sessionStorage.setItem("check",JSON.stringify(data));
        //       this.router.navigate(['useritem']);
        //     }
        //   )
        //
        // }
    };
    AdminpageComponent.prototype.logout = function () {
        var _this = this;
        // var LOGOUT_URL = "http://localhost:3000/wordgame/api/logout/v3";
        var LOGOUT_URL = "/docstar/api/v1/logout";
        this.http.post("/docstar/api/v1/logout", {}).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['login']);
        }, function (error) {
            _this.router.navigate(['login']);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AdminpageComponent.prototype, "documents", void 0);
    AdminpageComponent = __decorate([
        core_1.Component({
            selector: 'app-adminpage',
            template: __webpack_require__("./src/app/adminpage/adminpage.component.html"),
            styles: [__webpack_require__("./src/app/adminpage/adminpage.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, user_service_service_1.UserServiceService])
    ], AdminpageComponent);
    return AdminpageComponent;
}());
exports.AdminpageComponent = AdminpageComponent;


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
var userinfer_component_1 = __webpack_require__("./src/app/userinfer/userinfer.component.ts");
var adminpage_component_1 = __webpack_require__("./src/app/adminpage/adminpage.component.ts");
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'userpage', component: userpage_component_1.UserpageComponent },
    { path: 'userinfer', component: userinfer_component_1.UserinferComponent },
    { path: 'adminpage', component: adminpage_component_1.AdminpageComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                userpage_component_1.UserpageComponent,
                userinfer_component_1.UserinferComponent,
                adminpage_component_1.AdminpageComponent,
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

module.exports = "<div id=\"background\">\n  <div id=\"login\" style=\"position: relative; top:200px; \">\n    <div class=\"wrapper\" >\n      <form class=\"form-signin\" target=\"nm_iframe1\">\n        <h2 class=\"form-signin-heading\">Please login</h2>\n        <br>\n        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\"  [(ngModel)]=\"username\"/>\n\n        <input style=\"margin-top: 10px\" type=\"password\" class=\"form-control\"  name=\"password\" placeholder=\"password\" [(ngModel)]=\"password\"/>\n\n        <br>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"login($event)\">Login</button>\n        <label *ngIf=\"invalid1===1\" style=\"color: #873920;\" id=\"invalid1\" >Invalid username/password!</label>\n        <label *ngIf=\"invalid2===1\" style=\"color: #873920; \" id=\"invalid2\">Invalid format of email!</label>\n        <label *ngIf=\"invalid5===1\" style=\"color: #873920; \" id=\"invalid5\">Disabled account!</label>\n      </form>\n\n      <iframe id=\"id_iframe1\" name=\"nm_iframe1\" style=\"display:none;\"></iframe>\n    </div>\n  </div>\n</div>\n"

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
        // LOGIN_URL : string ="/login"
        this.LOGIN_URL = "/docstar/api/v1/login";
        this.invalid1 = 0;
        this.invalid2 = 0;
        this.invalid5 = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.username = "kenny";
        this.password = "123";
        this.validateUser();
    };
    LoginComponent.prototype.validateUser = function () {
        var _this = this;
        this.http.get("/docstar/api/v1/user").subscribe(function (data) {
            console.log(data);
            if (data.roles.length > 1) {
                _this.router.navigateByUrl('adminpage');
            }
            else if (data.roles.length == 1 && data.roles[0] == "USER") {
                _this.router.navigateByUrl('userpage');
            }
        }, function (error) {
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.invalid1 = 0;
        this.invalid2 = 0;
        this.invalid5 = 0;
        var credentials = JSON.parse(JSON.stringify({ username: this.username, password: this.password }));
        var head = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post(this.LOGIN_URL, credentials, { headers: head })
            .subscribe(function (data) {
            // console.log(data);
            _this.userService.setUser(data);
            sessionStorage.setItem("user", JSON.stringify(data));
            if (data.roles.length > 1) {
                _this.router.navigateByUrl('adminpage');
            }
            else if (data.roles.length == 1 && data.roles[0] == "USER") {
                _this.router.navigateByUrl('userpage');
            }
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

/***/ "./src/app/userinfer/userinfer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userinfer/userinfer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  userinfer works!\n</p>\n"

/***/ }),

/***/ "./src/app/userinfer/userinfer.component.ts":
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
var UserinferComponent = /** @class */ (function () {
    function UserinferComponent() {
    }
    UserinferComponent.prototype.ngOnInit = function () {
    };
    UserinferComponent = __decorate([
        core_1.Component({
            selector: 'app-userinfer',
            template: __webpack_require__("./src/app/userinfer/userinfer.component.html"),
            styles: [__webpack_require__("./src/app/userinfer/userinfer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserinferComponent);
    return UserinferComponent;
}());
exports.UserinferComponent = UserinferComponent;


/***/ }),

/***/ "./src/app/userpage/userpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userpage/userpage.component.html":
/***/ (function(module, exports) {

module.exports = "<label>userpage</label>\n"

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