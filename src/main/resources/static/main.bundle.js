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

module.exports = "\n<div id=\"page3\">\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n        <ul class=\"nav navbar-nav\">\n\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{user.username}}<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"/userinfer\">Edit</a></li>\n            </ul>\n          </li>\n          <li><a href=\"#\">Admin</a></li>\n          <li><a href=\"#\">User</a></li>\n        </ul>\n        <button type=\"button\" class=\"btn btn-default navbar-btn navbar-right\" style=\"margin-right: 20px\" (click)=\"logout()\">Log Out</button>-->\n\n      </div>\n    </div>\n  </nav>\n  <br>\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <a (click)=\"viewUserList()\">Manage Users</a>\n  </div>\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <div style=\"margin-top: 10px\">\n\n      <div class=\"col-md-4 col-md-offset-3\">\n        <label>Type</label>\n        <select class=\"form-control\" id=\"dtype\" name=\"dtype\"  (ngModelChange)=\"onTypeChange($event)\">\n          <!--<option value={{font.category}}>{{font.category}}</option>-->\n          <!--<option value={{font.category}}>{{font.category}}</option>-->\n          <option value=\"\" disabled selected>Select your Type</option>\n          <option value=\"RULE\">rule</option>\n          <option value=\"PRORULE\">prorule</option>\n          <option value=\"NOTICE\">notice</option>\n          <option value=\"PRESDOCU\">presdocu</option>\n          <!--<option *ngFor=\"let list of levelslist\">{{list.name}}</option>-->\n        </select>\n\n      </div>\n      <div class=\"form-group col-md-4 col-md-offset-3 \">\n        <label>Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Document Tile\" [(ngModel)]=\"title\">\n      </div>\n      <div class=\"form-group col-md-4 col-md-offset-3 \">\n        <label>Zipcode</label>\n        <input type=\"text\" class=\"form-control\" id=\"zipcode\" placeholder=\"Zipcode\" [(ngModel)]=\"zipcode\">\n      </div>\n      <div class=\"form-group col-md-4 col-md-offset-3\">\n        <input type=\"checkbox\" id=\"significance\"  (change)=\"toggleSignificance($event)\"> Significance\n        <input type=\"checkbox\" id=\"reviewed\"  (change)=\"toggleReviewed($event)\" style=\"margin-left: 20px\"> Reviewed\n\n      </div>\n      <div class=\"form-group col-md-4 col-md-offset-3\">\n\n        <button type=\"submit\" (click)=\"searchDocument()\" class=\"btn btn-primary\">Search</button>\n        <button type=\"submit\" (click)=\"refreshTable()\" style=\"margin-left: 20px\" class=\"btn btn-primary\">Refresh</button>\n\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n\n    <!--<ngx-datatable-->\n      <!--class=\"bootstrap\"-->\n      <!--[rows]=\"rows\"-->\n      <!--[columns]=\"columns\"-->\n      <!--[columnMode]=\"'force'\"-->\n      <!--[headerHeight]=\"40\"-->\n      <!--[footerHeight]=\"40\"-->\n      <!--[limit]=\"10\"-->\n      <!--[rowHeight]=\"'auto'\">-->\n      <!--<ngx-datatable-column name=\"name\" prop=\"name\" editable=\"false\" frozenLeft=\"True\"></ngx-datatable-column>-->\n\n      <!--<ngx-datatable-column name=\"Selected\" prop=\"\" editable=\"true\" frozenLeft=\"True\">-->\n        <!--<ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\"-->\n                     <!--let-group=\"group\">-->\n          <!--<input-->\n            <!--type=\"checkbox\"-->\n            <!--id=\"ep1{{rowIndex}}\"-->\n            <!--name=\"{{rowIndex}}\"-->\n            <!--value=\"0\"-->\n            <!--class=\"expectedpayment\"-->\n            <!--(change)=\"checkGroup($event, row, rowIndex, group)\"-->\n            <!--[checked]=\"\">-->\n          <!--<label for=\"ep1{{rowIndex}}\">Select</label>-->\n\n        <!--</ng-template>-->\n      <!--</ngx-datatable-column>-->\n\n      <!--</ngx-datatable>-->\n    <div style='float:left;width:90%'>\n      <ngx-datatable\n        style=\"width: 95%\"\n        class=\"bootstrap\"\n        [rows]=\"rows\"\n        [columnMode]=\"'flex'\"\n        [headerHeight]=\"50\"\n        [footerHeight]=\"50\"\n        [rowHeight]=\"'auto'\"\n        [limit]=\"20\"\n        [selected]=\"selected\"\n        [selectionType]=\"'checkbox'\"\n        [selectAllRowsOnPage]=\"false\"\n        [displayCheck]=\"displayCheck\"\n        (activate)=\"onActivate($event)\"\n        (select)='onSelect($event)'>\n        <ngx-datatable-column\n          [width]=\"30\"\n          [sortable]=\"false\"\n          [canAutoResize]=\"false\"\n          [draggable]=\"false\"\n          [resizeable]=\"false\"\n          [headerCheckboxable]=\"true\"\n          [checkboxable]=\"true\">\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"id\" [flexGrow]=\"1\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"name\" [flexGrow]=\"5\"></ngx-datatable-column>\n      </ngx-datatable>\n    </div>\n    <div class='selected-column' style=\"margin-left: 20px\">\n      <h4>Selections <small>({{selected?.length}})</small></h4>\n      <ul>\n        <li *ngFor='let sel of selected'>\n          {{sel.id}}\n        </li>\n        <li *ngIf=\"!selected?.length\">No Selections</li>\n      </ul>\n    </div>\n    </div>\n\n\n\n</div>\n\n\n"

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
        this.user = { username: "" };
        this.rows = [];
        this.columns = [
            { prop: 'name' }
        ];
        this.selected = [];
        this.validateUser();
    }
    AdminpageComponent.prototype.ngOnInit = function () {
        this.loadDocuments();
    };
    AdminpageComponent.prototype.validateUser = function () {
        var _this = this;
        this.http.get("/docstar/api/v1/user").subscribe(function (data) {
            console.log(data);
            _this.user = data;
            if (data.roles.length > 1) {
                // this.router.navigateByUrl( 'adminpage');
            }
            else if (data.roles.length == 1 && data.roles[0] == "USER") {
                _this.router.navigateByUrl('userpage');
            }
        }, function (error) {
            _this.router.navigateByUrl('login');
        });
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
    AdminpageComponent.prototype.loadDocuments = function () {
        var _this = this;
        this.http.get("/documents").subscribe(function (data) {
            _this.documents = data.results;
            var temparr = [];
            for (var x = 0; x < _this.documents.length; x++) {
                var temp = { "id": "" + _this.documents[x].document_number, "name": '' + _this.documents[x].title };
                temparr.push(temp);
            }
            // console.log(this.rows);
            _this.rows = temparr;
        });
    };
    AdminpageComponent.prototype.onTypeChange = function (value) {
        this.dtype = value;
        console.log(this.dtype);
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
    AdminpageComponent.prototype.refreshTable = function () {
        this.retrieveDocuments();
    };
    AdminpageComponent.prototype.retrieveDocuments = function () {
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
        var _this = this;
        var did = event.currentTarget.id;
        this.http.get("/documents/" + did, {}).subscribe(function (data) {
            sessionStorage.setItem("check", JSON.stringify(data));
            _this.router.navigate(['documentitem']);
        });
    };
    AdminpageComponent.prototype.displayCheck = function (row) {
        return row.name !== 'Ethel Price';
    };
    AdminpageComponent.prototype.onActivate = function (event) {
        // console.log('Activate Event', event);
    };
    AdminpageComponent.prototype.onSelect = function (_a) {
        // console.log('Select Event', selected, this.selected);
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    AdminpageComponent.prototype.viewUserList = function () {
        this.router.navigate(['userlist']);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AdminpageComponent.prototype, "documents", void 0);
    AdminpageComponent = __decorate([
        core_1.Component({
            selector: 'app-adminpage',
            template: __webpack_require__("./src/app/adminpage/adminpage.component.html"),
            styles: [__webpack_require__("./src/app/adminpage/adminpage.component.css")],
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, user_service_service_1.UserServiceService])
    ], AdminpageComponent);
    return AdminpageComponent;
}());
exports.AdminpageComponent = AdminpageComponent;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/**\n * angular2-data-table v\"11.3.2\" (https://github.com/swimlane/angular2-data-table)\n * Copyright 2016\n * Licensed under MIT\n */\n.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  -webkit-transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }\n.ngx-datatable [hidden] {\n    display: none !important; }\n.ngx-datatable *, .ngx-datatable *:before, .ngx-datatable *:after {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }\n.ngx-datatable.scroll-vertical .datatable-body .datatable-row-wrapper {\n      position: absolute; }\n.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }\n.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }\n.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }\n.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-flow: row;\n    -o-flex-flow: row;\n    flex-flow: row; }\n.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }\n.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }\n.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }\n.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }\n.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }\n.ngx-datatable .datatable-header .datatable-header-inner {\n      -webkit-box-align: stretch;\n          -ms-flex-align: stretch;\n              align-items: stretch;\n      -webkit-align-items: stretch; }\n.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }\n.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }\n.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }\n.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }\n.ngx-datatable .datatable-header .datatable-header-cell .resize-handle, .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }\n.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }\n.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }\n.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }\n.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }\n.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }\n.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }\n.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }\n.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n      flex-direction: column; }\n.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }\n.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%; }\n.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: 100%; }\n.ngx-datatable .datatable-footer .selected-count .page-count {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 40%;\n              flex: 1 1 40%; }\n.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 60%;\n              flex: 1 1 60%; }\n.ngx-datatable .datatable-footer .page-count {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 20%;\n              flex: 1 1 20%; }\n.ngx-datatable .datatable-footer .datatable-pager {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 80%;\n              flex: 1 1 80%;\n      text-align: right; }\n.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }\n.ngx-datatable .datatable-footer .datatable-pager .pager li, .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }\n.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }\n.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }\n/*\nbootstrap table theme\n*/\n.ngx-datatable.bootstrap {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 13px; }\n.ngx-datatable.bootstrap .datatable-header {\n    height: unset !important; }\n.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n      vertical-align: bottom;\n      padding: 0.75rem;\n      border-bottom: 1px solid #d1d4d7; }\n.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n        line-height: 24px; }\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #d1d4d7; }\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n      background-color: rgba(0, 0, 0, 0.05); }\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n      background-color: #1483ff;\n      color: #FFF; }\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n      text-align: left;\n      vertical-align: top; }\n.ngx-datatable.bootstrap .datatable-footer {\n    background: #424242;\n    color: #ededed;\n    margin-top: -1px; }\n.ngx-datatable.bootstrap .datatable-footer .page-count {\n      line-height: 50px;\n      height: 50px;\n      padding: 0 1.2rem; }\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager {\n      margin: 0 10px;\n      vertical-align: top; }\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n        margin: 10px 0px; }\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n          background-color: #545454;\n          font-weight: bold; }\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n        height: 22px;\n        min-width: 24px;\n        line-height: 22px;\n        padding: 0;\n        border-radius: 3px;\n        margin: 0 3px;\n        text-align: center;\n        vertical-align: top;\n        text-decoration: none;\n        vertical-align: bottom;\n        color: #ededed; }\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n      .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n      .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n      .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n        font-size: 18px;\n        line-height: 27px;\n        padding: 0 3px; }\n.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell {\n    font-weight: bold; }\n@charset \"UTF-8\";\n@font-face {\n  font-family: \"data-table\";\n  src:url(\"data:application/vnd.ms-fontobject;base64,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\");\n  src:url('data-table.bce071e976865da51100.eot?#iefix') format(\"embedded-opentype\"),\n    url(\"data:font/woff;base64,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\") format(\"woff\"),\n    url(\"data:font/ttf;base64,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\") format(\"truetype\"),\n    url('data-table.b0aebd744ce7adb780a9.svg#data-table') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n\n}\n[data-icon]:before {\n  font-family: \"data-table\" !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^=\"datatable-icon-\"]:before,\n[class*=\" datatable-icon-\"]:before {\n  font-family: \"data-table\" !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.datatable-icon-filter:before {\n  content: \"\\62\";\n}\n.datatable-icon-collapse:before {\n  content: \"\\61\";\n}\n.datatable-icon-expand:before {\n  content: \"\\63\";\n}\n.datatable-icon-close:before {\n  content: \"\\64\";\n}\n.datatable-icon-up:before {\n  content: \"\\65\";\n}\n.datatable-icon-down:before {\n  content: \"\\66\";\n}\n.datatable-icon-sort:before {\n  content: \"\\67\";\n}\n.datatable-icon-done:before {\n  content: \"\\68\";\n}\n.datatable-icon-done-all:before {\n  content: \"\\69\";\n}\n.datatable-icon-search:before {\n  content: \"\\6a\";\n}\n.datatable-icon-pin:before {\n  content: \"\\6b\";\n}\n.datatable-icon-add:before {\n  content: \"\\6d\";\n}\n.datatable-icon-left:before {\n  content: \"\\6f\";\n}\n.datatable-icon-right:before {\n  content: \"\\70\";\n}\n.datatable-icon-skip:before {\n  content: \"\\71\";\n}\n.datatable-icon-prev:before {\n  content: \"\\72\";\n}\n"

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
var documentitem_component_1 = __webpack_require__("./src/app/documentitem/documentitem.component.ts");
var ngx_datatable_1 = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
var userlist_component_1 = __webpack_require__("./src/app/userlist/userlist.component.ts");
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'userpage', component: userpage_component_1.UserpageComponent },
    { path: 'userinfer', component: userinfer_component_1.UserinferComponent },
    { path: 'adminpage', component: adminpage_component_1.AdminpageComponent },
    { path: 'documentitem', component: documentitem_component_1.DocumentitemComponent },
    { path: 'userlist', component: userlist_component_1.UserlistComponent }
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
                documentitem_component_1.DocumentitemComponent,
                userlist_component_1.UserlistComponent,
            ],
            imports: [
                ngx_datatable_1.NgxDatatableModule,
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

/***/ "./src/app/documentitem/documentitem.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentitem/documentitem.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  documentitem\n</p>\n"

/***/ }),

/***/ "./src/app/documentitem/documentitem.component.ts":
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
var DocumentitemComponent = /** @class */ (function () {
    function DocumentitemComponent() {
    }
    DocumentitemComponent.prototype.ngOnInit = function () {
    };
    DocumentitemComponent = __decorate([
        core_1.Component({
            selector: 'app-documentitem',
            template: __webpack_require__("./src/app/documentitem/documentitem.component.html"),
            styles: [__webpack_require__("./src/app/documentitem/documentitem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentitemComponent);
    return DocumentitemComponent;
}());
exports.DocumentitemComponent = DocumentitemComponent;


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

module.exports = "<div id=\"page4\"  >\n  <nav class=\"navbar navbar-inverse\">\n    <p class=\"navbar-text\" style=\"margin-left: 30px\" id=\"page4UserID\">{{user.username}}</p>\n    <button type=\"button\" class=\"btn btn-default navbar-btn navbar-right\" style=\"margin-right: 20px\" (click)=\"logout()\">Log Out</button>\n  </nav>\n  <div class=\"col-md-10 col-md-offset-1\">\n    <div class=\"form-group col-md-4 col-md-offset-3\" style=\"display: none\">\n      <input type=\"text\" class=\"form-control\" id=\"userID\" [(ngModel)]=\"user._id\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"avatar\">Avatar</label>\n      <input type=\"file\" id=\"avatar\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"fname\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"fname\" [(ngModel)]=\"user.firstname\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"lname\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lname\" [(ngModel)]=\"user.lastname\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"jane.doe@example.com\" [(ngModel)]=\"user.email\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"user.password\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label>Rule</label><br>\n      <label class=\"checkbox-inline\">\n        <input type=\"checkbox\" name=\"radio\" id=\"admin\" value=\"option1\" [disabled]=\"disableType\" [checked]=\"user.roles.length == 2\" (change)=\"toggleAdmin($event)\"> ADMIN\n      </label>\n      <!--<label class=\"radio-inline\">-->\n      <!--<input type=\"checkbox\" name=\"radio\" id=\"user\" value=\"option2\" [disabled]=\"disableType\" [checked]=\"user.roles.length == 1\" (change)=\"toggleUser($event)\"> USER-->\n      <!--</label>-->\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label>Enabled</label><br>\n      <div class=\"checkbox\">\n        <label>\n          <!--<input type=\"checkbox\" id=\"enabled\" [checked]=\"user.enabled == 'Enabled'\" [(ngModel)]=\"user.enabled\"> Enabled-->\n          <input type=\"checkbox\" id=\"enabled\" [checked]=\"user.enabled==true\" [disabled]=\"disableEnabled\" (change)=\"toggleEnabled($event)\"> Enabled\n\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group col-md-9 col-md-offset-3\">\n      <button type=\"submit\" class=\"btn btn-default col-md-1\" (click)=\"backToMainPage()\">Back</button>\n      <button type=\"submit\" class=\"btn btn-default col-md-1 col-md-offset-1\"  id=\"update\" (click)=\"updateUser()\">Update</button>\n    </div>\n    <div class=\"form-group col-md-9 col-md-offset-3\" *ngIf=\"invalid3===1\" >\n      <label style=\"color: #873920;\" id=\"invalid3\"  >Incompelete form</label>\n    </div>\n    <div class=\"form-group col-md-9 col-md-offset-3\" *ngIf=\"invalid4===1\">\n      <label style=\"color: #873920;\" id=\"invalid4\"  >Invalid format of email!</label>\n    </div>\n  </div>\n\n\n\n</div>\n"

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
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var UserinferComponent = /** @class */ (function () {
    function UserinferComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.disableType = false;
        this.disableEnabled = false;
        this.validateUser();
    }
    UserinferComponent.prototype.ngOnInit = function () {
    };
    UserinferComponent.prototype.validateUser = function () {
        var _this = this;
        this.http.get("/docstar/api/v1/user").subscribe(function (data) {
            console.log(data);
            _this.user = data;
            if (data.roles.length > 1) {
                // this.router.navigateByUrl( 'adminpage');
            }
            else if (data.roles.length == 1 && data.roles[0] == "USER") {
                _this.router.navigateByUrl('userpage');
            }
        }, function (error) {
            _this.router.navigateByUrl('login');
        });
    };
    UserinferComponent.prototype.logout = function () {
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
    UserinferComponent.prototype.backToMainPage = function () {
        this.router.navigate(['adminpage']);
    };
    UserinferComponent.prototype.toggleEnabled = function (event) {
        if (event.target.checked) {
            this.user.enabled = true;
        }
        else {
            this.user.enabled = false;
        }
    };
    UserinferComponent.prototype.toggleAdmin = function (event) {
        if (event.target.checked) {
            this.user.roles = ["ADMIN", "USER"];
        }
        else {
            this.user.roles = ["USER"];
        }
    };
    UserinferComponent.prototype.toggleUser = function (event) {
        if (event.target.checked) {
            this.user.roles = ["USER"];
        }
    };
    UserinferComponent = __decorate([
        core_1.Component({
            selector: 'app-userinfer',
            template: __webpack_require__("./src/app/userinfer/userinfer.component.html"),
            styles: [__webpack_require__("./src/app/userinfer/userinfer.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, user_service_service_1.UserServiceService])
    ], UserinferComponent);
    return UserinferComponent;
}());
exports.UserinferComponent = UserinferComponent;


/***/ }),

/***/ "./src/app/userlist/userlist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userlist/userlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page3\">\n  <nav class=\"navbar navbar-inverse\">\n    <p class=\"navbar-text\" style=\"margin-left: 30px\" id=\"adminEmail\">{{suser.username}}</p>\n    <button type=\"button\" class=\"btn btn-default navbar-btn navbar-right\" style=\"margin-right: 20px\" (click)=\"logout()\">Log Out</button>\n  </nav>\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <a onmouseover=\"\" style=\"cursor: pointer;\" (click)=\"viewUser('create')\">Create User</a>\n  </div>\n  <br>\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <table class=\"table table-bordered\" style=\"width:100%\" id=\"userList\" >\n      <thead>\n      <tr>\n        <th>First-name</th>\n        <th>Last-name</th>\n        <th>Email</th>\n        <th>Role</th>\n        <th>Enabled Status</th>\n      </tr>\n      </thead>\n      <tbody id=\"userTB\">\n      <tr *ngFor=\"let user of users\" (click)=\"viewUser($event)\" style=\"cursor: pointer;\" id={{user._id}}>\n        <td>{{user.firstname}}</td>\n        <td>{{user.lastname}}</td>\n        <td>{{user.email}}</td>\n        <td><label *ngFor=\"let a of user.roles\" [ngStyle]=\"{'margin-left':'10px'}\">{{a}}</label></td>\n        <td>{{user.enabled}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/userlist/userlist.component.ts":
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
var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
    }
    UserlistComponent.prototype.ngOnInit = function () {
        this.validateUser();
        this.retrieveUsers();
    };
    UserlistComponent.prototype.validateUser = function () {
        var _this = this;
        this.http.get("/docstar/api/v1/user").subscribe(function (data) {
            _this.suser = data;
            console.log(data);
            if (data.roles.length > 1) {
                // this.router.navigateByUrl( 'adminpage');
            }
            else if (data.roles.length == 1 && data.roles[0] == "USER") {
                _this.router.navigateByUrl('userpage');
            }
        }, function (error) {
            _this.router.navigateByUrl('login');
        });
    };
    UserlistComponent.prototype.logout = function () {
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
    UserlistComponent.prototype.retrieveUsers = function () {
        var _this = this;
        this.filter = '';
        this.http.get("/docstar/api/v1/users").subscribe(function (data) {
            console.log("users:" + data);
            _this.users = data;
        });
    };
    UserlistComponent.prototype.refreshTable = function () {
        this.retrieveUsers();
    };
    UserlistComponent.prototype.viewUser = function (event) {
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserlistComponent.prototype, "users", void 0);
    UserlistComponent = __decorate([
        core_1.Component({
            selector: 'app-userlist',
            template: __webpack_require__("./src/app/userlist/userlist.component.html"),
            styles: [__webpack_require__("./src/app/userlist/userlist.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, user_service_service_1.UserServiceService])
    ], UserlistComponent);
    return UserlistComponent;
}());
exports.UserlistComponent = UserlistComponent;


/***/ }),

/***/ "./src/app/userpage/userpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userpage/userpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page3\">\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n        <ul class=\"nav navbar-nav\">\n\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Username<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">Edit</a></li>\n            </ul>\n          </li>\n        </ul>\n        <button type=\"button\" class=\"btn btn-default navbar-btn navbar-right\" style=\"margin-right: 20px\" (click)=\"logout()\">Log Out</button>-->\n\n      </div>\n    </div>\n  </nav>\n  <br>\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <div style=\"margin-top: 10px\">\n\n      <div class=\"col-md-4 col-md-offset-3\">\n        <label>Type</label>\n        <select class=\"form-control\" id=\"diff\" name=\"diff\"  [(ngModel)]=\"selectedDiff\" (ngModelChange)=\"onDiffChange($event)\">\n          <!--<option value={{font.category}}>{{font.category}}</option>-->\n          <!--<option value={{font.category}}>{{font.category}}</option>-->\n          <option value=\"\" disabled selected>Select your Type</option>\n          <option value=\"RULE\">rule</option>\n          <option value=\"PRORULE\">prorule</option>\n          <option value=\"NOTICE\">notice</option>\n          <option value=\"PRESDOCU\">presdocu</option>\n          <!--<option *ngFor=\"let list of levelslist\">{{list.name}}</option>-->\n        </select>\n\n      </div>\n      <div class=\"form-group col-md-4 col-md-offset-3 \">\n        <label>Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Document Tile\" [(ngModel)]=\"filter\">\n      </div>\n      <div class=\"form-group col-md-4 col-md-offset-3 \">\n        <label>Zipcode</label>\n        <input type=\"text\" class=\"form-control\" id=\"zipcode\" placeholder=\"Zipcode\" [(ngModel)]=\"filter\">\n      </div>\n      <div class=\"form-group col-md-4 col-md-offset-3\">\n        <input type=\"checkbox\" id=\"significance\" [checked]=\"user.enabled == 'Enabled'\" [disabled]=\"disableCheck\" (change)=\"toggleEnabled($event)\"> Significance\n        <input type=\"checkbox\" id=\"reviewed\" [checked]=\"user.enabled == 'Enabled'\" [disabled]=\"disableCheck\" (change)=\"toggleEnabled($event)\" style=\"margin-left: 20px\"> Reviewed\n\n      </div>\n      <div class=\"form-group col-md-4 col-md-offset-3\">\n\n        <button type=\"submit\" (click)=\"searchUser()\" class=\"btn btn-primary\">Search</button>\n        <button type=\"submit\" (click)=\"refreshTable()\" style=\"margin-left: 20px\" class=\"btn btn-primary\">Refresh</button>\n\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <table class=\"table table-bordered\" style=\"width:100%\" id=\"userList\" >\n      <thead>\n      <tr>\n        <th>First-name</th>\n        <th>Last-name</th>\n        <th>Email</th>\n        <th>Role</th>\n        <th>Enabled Status</th>\n      </tr>\n      </thead>\n      <tbody id=\"userTB\">\n      <tr *ngFor=\"let user of users\" (click)=\"viewUser($event)\" style=\"cursor: pointer;\" id={{user._id}}>\n        <td>{{user.name.first}}</td>\n        <td>{{user.name.last}}</td>\n        <td>{{user.email}}</td>\n        <td>{{user.role}}</td>\n        <td>{{user.enabled}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>\n"

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
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var UserpageComponent = /** @class */ (function () {
    function UserpageComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.validateUser();
    }
    UserpageComponent.prototype.ngOnInit = function () {
    };
    UserpageComponent.prototype.validateUser = function () {
        var _this = this;
        this.http.get("/docstar/api/v1/user").subscribe(function (data) {
            console.log(data);
            _this.user = data;
            if (data.roles.length > 1) {
                // this.router.navigateByUrl( 'adminpage');
            }
            else if (data.roles.length == 1 && data.roles[0] == "USER") {
                _this.router.navigateByUrl('userpage');
            }
        }, function (error) {
            _this.router.navigateByUrl('login');
        });
    };
    UserpageComponent.prototype.logout = function () {
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
    UserpageComponent = __decorate([
        core_1.Component({
            selector: 'app-userpage',
            template: __webpack_require__("./src/app/userpage/userpage.component.html"),
            styles: [__webpack_require__("./src/app/userpage/userpage.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, user_service_service_1.UserServiceService])
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