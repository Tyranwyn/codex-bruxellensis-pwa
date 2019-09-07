(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/editable-lyrics/editable-text.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/editable-lyrics/editable-text.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!editing\" class=\"field has-addons\">\n  <div class=\"control\">\n    <div class=\"preformatted\">{{text}}</div>\n  </div>\n  <div class=\"control\">\n    <a *ngIf=\"editable\" class=\"button is-primary\" (click)=\"editing = !editing\">\n    <span class=\"icon is-primary\">\n      <fa-icon [icon]=\"['fas', 'edit']\"></fa-icon>\n    </span>\n    </a>\n  </div>\n</div>\n<div *ngIf=\"editing\">\n  <div class=\"field\">\n    <div class=\"control is-medium\">\n      <textarea autosize class=\"textarea\" [placeholder]=\"textPlaceholder\" [(ngModel)]=\"text\"></textarea>\n    </div>\n    <div class=\"control is-medium\">\n      <a class=\"button is-primary is-medium\" (click)=\"save()\">\n      <span *ngIf=\"!buttonText\" class=\"icon is-primary is-medium\">\n        <fa-icon [icon]=\"['far', 'save']\"></fa-icon>\n      </span>\n        {{buttonText}}\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/editable-title/editable-title.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/editable-title/editable-title.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!editing\" class=\"field has-addons\">\n  <div class=\"control\">\n    <h1 class=\"title\">{{title}}</h1>\n    <h2 *ngIf=\"subtitle\" class=\"subtitle\" style=\"white-space: pre;\">{{subtitle}}</h2>\n  </div>\n  <div class=\"control\">\n    <a *ngIf=\"editable\" class=\"button is-primary\" (click)=\"editing = !editing\">\n    <span class=\"icon is-primary\">\n      <fa-icon [icon]=\"['fas', 'edit']\"></fa-icon>\n    </span>\n    </a>\n  </div>\n</div>\n<div *ngIf=\"editing\">\n  <div class=\"field\">\n    <div class=\"control is-medium\">\n      <input class=\"input is-medium\" type=\"text\" [placeholder]=\"subtitlePlaceholder\" [(ngModel)]=\"title\"/>\n    </div>\n    <div *ngIf=\"subtitle != undefined\" class=\"control is-medium\">\n      <textarea class=\"textarea\" [placeholder]=\"subtitleFieldName\" [(ngModel)]=\"subtitle\"></textarea>\n    </div>\n    <div class=\"control is-medium\">\n      <a class=\"button is-primary is-medium\" (click)=\"save()\">\n      <span *ngIf=\"!buttonText\" class=\"icon is-primary is-medium\">\n        <fa-icon [icon]=\"['far', 'save']\"></fa-icon>\n      </span>\n        {{buttonText}}\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" routerLink=\"\">\n      <img src=\"https://bulma.io/images/bulma-logo.png\" width=\"112\" height=\"28\">\n    </a>\n\n    <a role=\"button\" class=\"navbar-burger burger\" aria-label=\"menu\" aria-expanded=\"false\"\n       data-target=\"navbarBasicExample\">\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n    </a>\n  </div>\n\n  <div id=\"navbarBasicExample\" class=\"navbar-menu\">\n    <div class=\"navbar-start\">\n      <a class=\"navbar-item\" routerLink=\"\">\n        Home\n      </a>\n      <a class=\"navbar-item\" *ngFor=\"let category of categories | enumToArray\" (click)=\"categoryFilter(category)\">\n        {{category}}\n      </a>\n    </div>\n\n    <div class=\"navbar-end\">\n      <div class=\"navbar-item has-dropdown is-hoverable\" *ngIf=\"angularFireAuth.user | async as user\">\n        <p class=\"navbar-link\">Dag {{user.displayName}}</p>\n\n        <div class=\"navbar-dropdown\">\n          <a class=\"navbar-item\" (click)=\"logout()\">\n            Logout\n          </a>\n        </div>\n      </div>\n      <div class=\"navbar-item is-light\" *ngIf=\"!(angularFireAuth.user | async)\">\n        <a class=\"button\" routerLink=\"/login\">\n          Log in\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"buttons\" *ngIf=\"loginByEmail == false; else emailLogin\">\n  <a class=\"button\" *ngFor=\"let provider of authProviders | enumToArray\" (click)=\"login(provider)\">{{provider}}</a>\n  <a class=\"button\" (click)=\"loginByEmail = true\">Email</a>\n</div>\n<ng-template #emailLogin>\n  <div class=\"field\">\n    <div class=\"control has-icons-left\">\n      <input class=\"input\" [(ngModel)]=\"email\" type=\"email\" placeholder=\"Email\">\n      <span class=\"icon is-small is-left\">\n        <fa-icon [icon]=\"['far', 'envelope']\"></fa-icon>\n      </span>\n    </div>\n  </div>\n  <div class=\"field\">\n    <div class=\"control has-icons-left\">\n      <input class=\"input\" [(ngModel)]=\"password\" type=\"password\" placeholder=\"Password\">\n      <span class=\"icon is-small is-left\">\n        <fa-icon [icon]=\"['fas', 'lock']\"></fa-icon>\n      </span>\n    </div>\n  </div>\n  <a class=\"button is-primary\" (click)=\"login('EmailLogin')\">Login</a>\n  <a class=\"button is-info\" (click)=\"login('EmailSignup')\">Signup</a>\n  <a class=\"button\" (click)=\"loginByEmail = false\">Back</a>\n</ng-template>\n<div class=\"notification is-danger\" *ngIf=\"error\">\n  <button class=\"delete\" (click)=\"error = null\"></button>\n  {{error.message}}\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/songs/song-detail/song-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/songs/song-detail/song-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero\" *ngIf=\"$song | async as song; else progressBar\">\n  <div class=\"hero-body\">\n    <p>{{song.page}}</p>\n    <a *ngIf=\"auth.user | async\" class=\"has-text-primary\" (click)=\"updateFavorites(songId)\">\n      <fa-icon *ngIf=\"userData\" [icon]=\"isSongFavorite(songId)? ['fas', 'star']: ['far', 'star']\"></fa-icon>\n    </a>\n    <div class=\"columns\">\n      <div class=\"column\" *ngIf=\"song.associationName\">\n        <app-editable-title [title]=\"song.associationName\"\n                            titleFieldName=\"associationName\"\n                            titlePlaceholder=\"Association Name\"\n                            [editable]=\"canModifySong()\"\n                            (saved)=\"updateSong($event)\">\n        </app-editable-title>\n        <app-editable-text [text]=\"song.associationInfo\"\n                           textFieldName=\"associationInfo\"\n                           textPlaceholder=\"Association Info\"\n                           [editable]=\"canModifySong()\"\n                           (saved)=\"updateSong($event)\">\n        </app-editable-text>\n      </div>\n      <div class=\"column\" *ngIf=\"song.battleCryName\">\n        <div>\n          <app-editable-title [title]=\"song.battleCryName\"\n                              titleFieldName=\"battleCryName\"\n                              titlePlaceholder=\"Kreet Titel\"\n                              [subtitle]=\"song.battleCryInfo\"\n                              subtitleFieldName=\"battleCryInfo\"\n                              subtitlePlaceholder=\"Kreet Info\"\n                              [editable]=\"canModifySong()\"\n                              (saved)=\"updateSong($event)\">\n          </app-editable-title>\n          <app-editable-text [text]=\"song.battleCry\"\n                             textFieldName=\"battleCry\"\n                             textPlaceholder=\"Kreet\"\n                             [editable]=\"canModifySong()\"\n                             (saved)=\"updateSong($event)\">\n          </app-editable-text>\n        </div>\n      </div>\n      <div class=\"column\" *ngIf=\"song.title\">\n        <div>\n          <app-editable-title [title]=\"song.title\"\n                              [subtitle]=\"song.bgInfo\"\n                              subtitleFieldName=\"bgInfo\"\n                              subtitlePlaceholder=\"Background Info\"\n                              [editable]=\"canModifySong()\"\n                              (saved)=\"updateSong($event)\">\n          </app-editable-title>\n          <app-editable-text [text]=\"song.lyrics\"\n                             textFieldName=\"lyrics\"\n                             textPlaceholder=\"Lyrics\"\n                             [editable]=\"canModifySong()\"\n                             (saved)=\"updateSong($event)\">\n          </app-editable-text>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<ng-template #progressBar>\n  <progress class=\"progress is-small is-primary\" max=\"100\"></progress>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/songs/song-list/song-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/songs/song-list/song-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"control has-icons-left\">\n  <input class=\"input is-rounded\" [(ngModel)]=\"filter\"\n         (ngModelChange)=\"search()\" type=\"email\" placeholder=\"Search\">\n  <span class=\"icon is-small is-left\">\n    <fa-icon [icon]=\"['fas', 'search']\"></fa-icon>\n  </span>\n</div>\n<table class=\"table is-hoverable is-fullwidth\" *ngIf=\"$songs | async as songs; else progressBar\">\n  <tbody>\n  <tr *ngFor=\"let song of songs\" style=\"cursor: pointer; border: 0;\">\n    <td *ngIf=\"auth.user | async\" class=\"has-text-primary\" (click)=\"updateFavorites(song.id)\">\n      <fa-icon *ngIf=\"userData\" [icon]=\"isSongFavorite(song.id)? ['fas', 'star']: ['far', 'star']\"></fa-icon>\n    </td>\n    <td [routerLink]=\"['/song', song.id]\">{{song.title}}</td>\n    <td [routerLink]=\"['/song', song.id]\">{{song.page}}</td>\n  </tr>\n  </tbody>\n</table>\n<ng-template #progressBar>\n  <progress class=\"progress is-small is-primary\" max=\"100\"></progress>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/songs/songs.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/songs/songs.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-song-list></app-song-list>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _songs_songs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./songs/songs.component */ "./src/app/songs/songs.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _songs_song_detail_song_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./songs/song-detail/song-detail.component */ "./src/app/songs/song-detail/song-detail.component.ts");






var routes = [
    { path: '', component: _songs_songs_component__WEBPACK_IMPORTED_MODULE_3__["SongsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'song/:id', component: _songs_song_detail_song_detail_component__WEBPACK_IMPORTED_MODULE_5__["SongDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(auth, userDataService, swUpdate) {
        this.swUpdate = swUpdate;
        auth.user.subscribe(function (user) { return userDataService.setUserData(user); });
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(function () {
                if (confirm('New version available. Load new version?')) {
                    window.location.reload();
                }
            });
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _services_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["SwUpdate"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./firebase-config */ "./src/app/firebase-config.ts");
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/navbar/navbar.component */ "./src/app/common/navbar/navbar.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _tools_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tools/enum-to-array-pipe */ "./src/app/tools/enum-to-array-pipe.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _songs_songs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./songs/songs.component */ "./src/app/songs/songs.component.ts");
/* harmony import */ var _songs_song_list_song_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./songs/song-list/song-list.component */ "./src/app/songs/song-list/song-list.component.ts");
/* harmony import */ var _songs_song_detail_song_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./songs/song-detail/song-detail.component */ "./src/app/songs/song-detail/song-detail.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_editable_title_editable_title_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./common/editable-title/editable-title.component */ "./src/app/common/editable-title/editable-title.component.ts");
/* harmony import */ var _common_editable_lyrics_editable_text_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./common/editable-lyrics/editable-text.component */ "./src/app/common/editable-lyrics/editable-text.component.ts");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/fesm5/ngx-autosize.js");

























var AppModule = /** @class */ (function () {
    function AppModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faStar"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_19__["faStar"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faEnvelope"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_19__["faSearch"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_19__["faLock"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_19__["faEdit"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faSave"]);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _tools_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_11__["EnumToArrayPipe"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _songs_songs_component__WEBPACK_IMPORTED_MODULE_13__["SongsComponent"],
                _songs_song_list_song_list_component__WEBPACK_IMPORTED_MODULE_14__["SongListComponent"],
                _songs_song_detail_song_detail_component__WEBPACK_IMPORTED_MODULE_15__["SongDetailComponent"],
                _common_editable_title_editable_title_component__WEBPACK_IMPORTED_MODULE_22__["EditableTitleComponent"],
                _common_editable_lyrics_editable_text_component__WEBPACK_IMPORTED_MODULE_23__["EditableTextComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_firebase_config__WEBPACK_IMPORTED_MODULE_8__["firebaseConfig"]),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"].enablePersistence(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production }),
                ngx_autosize__WEBPACK_IMPORTED_MODULE_24__["AutosizeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/editable-lyrics/editable-text.component.css":
/*!********************************************************************!*\
  !*** ./src/app/common/editable-lyrics/editable-text.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preformatted {\n  white-space: pre;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2VkaXRhYmxlLWx5cmljcy9lZGl0YWJsZS10ZXh0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vZWRpdGFibGUtbHlyaWNzL2VkaXRhYmxlLXRleHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmVmb3JtYXR0ZWQge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/common/editable-lyrics/editable-text.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/editable-lyrics/editable-text.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditableTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableTextComponent", function() { return EditableTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditableTextComponent = /** @class */ (function () {
    function EditableTextComponent() {
        this.textFieldName = 'text';
        this.textPlaceholder = 'Text';
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EditableTextComponent.prototype.ngOnInit = function () {
    };
    EditableTextComponent.prototype.save = function () {
        var _a;
        this.saved.emit((_a = {}, _a[this.textFieldName] = this.text, _a));
        this.editing = !this.editing;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EditableTextComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditableTextComponent.prototype, "textFieldName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditableTextComponent.prototype, "textPlaceholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EditableTextComponent.prototype, "buttonText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], EditableTextComponent.prototype, "editable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditableTextComponent.prototype, "saved", void 0);
    EditableTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editable-text',
            template: __webpack_require__(/*! raw-loader!./editable-text.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/editable-lyrics/editable-text.component.html"),
            styles: [__webpack_require__(/*! ./editable-text.component.css */ "./src/app/common/editable-lyrics/editable-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditableTextComponent);
    return EditableTextComponent;
}());



/***/ }),

/***/ "./src/app/common/editable-title/editable-title.component.css":
/*!********************************************************************!*\
  !*** ./src/app/common/editable-title/editable-title.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9lZGl0YWJsZS10aXRsZS9lZGl0YWJsZS10aXRsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/editable-title/editable-title.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/editable-title/editable-title.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditableTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableTitleComponent", function() { return EditableTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditableTitleComponent = /** @class */ (function () {
    function EditableTitleComponent() {
        this.titleFieldName = 'title';
        this.subtitleFieldName = 'subtitle';
        this.subtitlePlaceholder = 'Subtitle';
        this.titlePlaceholder = 'Title';
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EditableTitleComponent.prototype.ngOnInit = function () {
    };
    EditableTitleComponent.prototype.save = function () {
        var _a;
        var returnObject = (_a = {}, _a[this.titleFieldName] = this.title, _a);
        if (this.subtitle) {
            returnObject[this.subtitleFieldName] = this.subtitle;
        }
        this.saved.emit(returnObject);
        this.editing = !this.editing;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EditableTitleComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EditableTitleComponent.prototype, "subtitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditableTitleComponent.prototype, "titleFieldName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditableTitleComponent.prototype, "subtitleFieldName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditableTitleComponent.prototype, "subtitlePlaceholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditableTitleComponent.prototype, "titlePlaceholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EditableTitleComponent.prototype, "buttonText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], EditableTitleComponent.prototype, "editable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditableTitleComponent.prototype, "saved", void 0);
    EditableTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editable-title',
            template: __webpack_require__(/*! raw-loader!./editable-title.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/editable-title/editable-title.component.html"),
            styles: [__webpack_require__(/*! ./editable-title.component.css */ "./src/app/common/editable-title/editable-title.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditableTitleComponent);
    return EditableTitleComponent;
}());



/***/ }),

/***/ "./src/app/common/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _models_category_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/category.enum */ "./src/app/models/category.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(angularFireAuth, router) {
        this.angularFireAuth = angularFireAuth;
        this.router = router;
        this.categories = _models_category_enum__WEBPACK_IMPORTED_MODULE_3__["Category"];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.angularFireAuth.auth.signOut();
    };
    NavbarComponent.prototype.categoryFilter = function (category) {
        this.router.navigate([''], { queryParams: { category: category } });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/common/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/firebase-config.ts":
/*!************************************!*\
  !*** ./src/app/firebase-config.ts ***!
  \************************************/
/*! exports provided: firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: 'AIzaSyCVzWGlfI_49hgqCL_RKuqLH-efx8jGJBg',
    authDomain: 'codex-bruxellensis.firebaseapp.com',
    databaseURL: 'https://codex-bruxellensis.firebaseio.com',
    projectId: 'codex-bruxellensis',
    storageBucket: 'codex-bruxellensis.appspot.com',
    messagingSenderId: '920899628278',
    appID: '1:920899628278:android:ef277d668fe25c97',
};


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _models_auth_providers_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/auth-providers.enum */ "./src/app/models/auth-providers.enum.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, angularFireAuth, authService) {
        this.router = router;
        this.angularFireAuth = angularFireAuth;
        this.authService = authService;
        this.authProviders = _models_auth_providers_enum__WEBPACK_IMPORTED_MODULE_4__["AuthProviders"];
        this.loginByEmail = false;
        this.angularFireAuth.user.subscribe(function (user) {
            if (user) {
                router.navigate(['']);
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (provider) {
        try {
            if (provider.startsWith('Email')) {
                this.authService.login(provider, this.email, this.password);
            }
            else {
                this.authService.login(provider);
            }
        }
        catch (e) {
            this.error = e;
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/account-type.enum.ts":
/*!*********************************************!*\
  !*** ./src/app/models/account-type.enum.ts ***!
  \*********************************************/
/*! exports provided: AccountType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
var AccountType;
(function (AccountType) {
    AccountType[AccountType["USER"] = 0] = "USER";
    AccountType[AccountType["ADMIN"] = 1] = "ADMIN";
})(AccountType || (AccountType = {}));


/***/ }),

/***/ "./src/app/models/auth-providers.enum.ts":
/*!***********************************************!*\
  !*** ./src/app/models/auth-providers.enum.ts ***!
  \***********************************************/
/*! exports provided: AuthProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProviders", function() { return AuthProviders; });
var AuthProviders;
(function (AuthProviders) {
    AuthProviders["Google"] = "Google";
    AuthProviders["Facebook"] = "Facebook";
    AuthProviders["GitHub"] = "GitHub";
    AuthProviders["Twitter"] = "Twitter";
})(AuthProviders || (AuthProviders = {}));


/***/ }),

/***/ "./src/app/models/category.enum.ts":
/*!*****************************************!*\
  !*** ./src/app/models/category.enum.ts ***!
  \*****************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category;
(function (Category) {
    Category["ASSOCIATION"] = "ASSOCIATION";
    Category["DUTCH"] = "DUTCH";
    Category["FRENCH"] = "FRENCH";
    Category["GERMAN"] = "GERMAN";
    Category["ENGLISH"] = "ENGLISH";
    Category["FOREIGN"] = "FOREIGN";
})(Category || (Category = {}));


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_auth_providers_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/auth-providers.enum */ "./src/app/models/auth-providers.enum.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    AuthenticationService.prototype.login = function (provider, email, password) {
        switch (provider) {
            case _models_auth_providers_enum__WEBPACK_IMPORTED_MODULE_2__["AuthProviders"].Google:
                return this.angularFireAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
            case _models_auth_providers_enum__WEBPACK_IMPORTED_MODULE_2__["AuthProviders"].Facebook:
                return this.angularFireAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider());
            case _models_auth_providers_enum__WEBPACK_IMPORTED_MODULE_2__["AuthProviders"].Twitter:
                return this.angularFireAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].TwitterAuthProvider());
            case _models_auth_providers_enum__WEBPACK_IMPORTED_MODULE_2__["AuthProviders"].GitHub:
                return this.angularFireAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GithubAuthProvider());
            case 'EmailLogin':
                return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
            case 'EmailSignup':
                return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
            default:
                console.log("The provider: " + provider + ", is not configured yet.");
        }
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/song-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/song-service.ts ***!
  \******************************************/
/*! exports provided: SongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongService", function() { return SongService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var SongService = /** @class */ (function () {
    function SongService(afs) {
        this.afs = afs;
        this.songCollection = afs.collection(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].databases.songs, function (ref) { return ref.orderBy('page'); });
    }
    SongService.prototype.getAllSongs = function () {
        return this.songCollection
            .valueChanges({ idField: 'id' });
    };
    SongService.prototype.getSongsByCategory = function (category) {
        return this.afs.collection(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].databases.songs, function (ref) { return ref.where('category', '==', category); })
            .valueChanges({ idField: 'id' });
    };
    SongService.prototype.getSongById = function (id) {
        return this.songCollection.doc(id)
            .valueChanges();
    };
    SongService.prototype.getSongReferenceById = function (id) {
        return this.songCollection.doc(id).ref;
    };
    SongService.prototype.addSong = function (song) {
        return this.songCollection.add(song);
    };
    SongService.prototype.updateSong = function (id, song) {
        return this.songCollection.doc(id).update(song);
    };
    SongService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], SongService);
    return SongService;
}());



/***/ }),

/***/ "./src/app/services/user-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user-data.service.ts ***!
  \***********************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _models_account_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/account-type.enum */ "./src/app/models/account-type.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _song_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./song-service */ "./src/app/services/song-service.ts");









var UserDataService = /** @class */ (function () {
    function UserDataService(angularFireAuth, afs, songService) {
        this.angularFireAuth = angularFireAuth;
        this.songService = songService;
        this.userDataCollection = afs.collection(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].databases.userData);
    }
    UserDataService.prototype.setUserData = function (user) {
        if (user) {
            var userDataDoc_1 = this.userDataCollection.doc(user.uid);
            userDataDoc_1.get()
                .subscribe(function (userData) {
                if (!userData.data()) {
                    var initUserData = { accountType: _models_account_type_enum__WEBPACK_IMPORTED_MODULE_5__["AccountType"].USER, favorites: [] };
                    userDataDoc_1.set(initUserData).catch(function (e) { return console.log(e); });
                }
            });
        }
    };
    UserDataService.prototype.getUserData = function (id) {
        if (id) {
            return this.userDataCollection.doc(id)
                .valueChanges();
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
    };
    UserDataService.prototype.addFavorite = function (id) {
        var _this = this;
        this.angularFireAuth.user.subscribe(function (user) {
            if (user) {
                var favorite = _this.songService.getSongReferenceById(id);
                _this.userDataCollection.doc(user.uid)
                    .update({
                    // @ts-ignore
                    favorites: firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayUnion(favorite)
                });
            }
        });
    };
    UserDataService.prototype.removeFavorite = function (id) {
        var _this = this;
        this.angularFireAuth.user.subscribe(function (user) {
            if (user) {
                var favorite = _this.songService.getSongReferenceById(id);
                _this.userDataCollection.doc(user.uid)
                    .update({
                    // @ts-ignore
                    favorites: firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayRemove(favorite)
                });
            }
        });
    };
    UserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _song_service__WEBPACK_IMPORTED_MODULE_8__["SongService"]])
    ], UserDataService);
    return UserDataService;
}());



/***/ }),

/***/ "./src/app/songs/song-detail/song-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/songs/song-detail/song-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbmdzL3NvbmctZGV0YWlsL3NvbmctZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/songs/song-detail/song-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/songs/song-detail/song-detail.component.ts ***!
  \************************************************************/
/*! exports provided: SongDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongDetailComponent", function() { return SongDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/song-service */ "./src/app/services/song-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _models_account_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/account-type.enum */ "./src/app/models/account-type.enum.ts");









var SongDetailComponent = /** @class */ (function () {
    function SongDetailComponent(route, songService, titleService, userDataService, auth) {
        var _this = this;
        this.route = route;
        this.songService = songService;
        this.titleService = titleService;
        this.userDataService = userDataService;
        this.auth = auth;
        auth.user
            .subscribe(function (user) {
            if (user) {
                _this.userDataService.getUserData(user.uid).subscribe(function (userData) { return _this.userData = userData; });
            }
        });
    }
    SongDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$song = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            _this.songId = params.get('id');
            return _this.songService.getSongById(_this.songId);
        }));
        this.$song.subscribe(function (song) { return _this.titleService.setTitle(song.title); });
    };
    SongDetailComponent.prototype.isSongFavorite = function (id) {
        if (this.userData.favorites) {
            return !!this.userData.favorites.find(function (ref) { return ref.id === id; });
        }
        return false;
    };
    SongDetailComponent.prototype.updateFavorites = function (id) {
        if (this.isSongFavorite(id)) {
            this.userDataService.removeFavorite(id);
        }
        else {
            this.userDataService.addFavorite(id);
        }
    };
    SongDetailComponent.prototype.updateSong = function ($event) {
        this.songService.updateSong(this.songId, $event);
    };
    SongDetailComponent.prototype.canModifySong = function () {
        return this.userData && this.userData.accountType === _models_account_type_enum__WEBPACK_IMPORTED_MODULE_8__["AccountType"].ADMIN;
    };
    SongDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-song-detail',
            template: __webpack_require__(/*! raw-loader!./song-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/songs/song-detail/song-detail.component.html"),
            styles: [__webpack_require__(/*! ./song-detail.component.css */ "./src/app/songs/song-detail/song-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]])
    ], SongDetailComponent);
    return SongDetailComponent;
}());



/***/ }),

/***/ "./src/app/songs/song-list/song-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/songs/song-list/song-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbmdzL3NvbmctbGlzdC9zb25nLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/songs/song-list/song-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/songs/song-list/song-list.component.ts ***!
  \********************************************************/
/*! exports provided: SongListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListComponent", function() { return SongListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/song-service */ "./src/app/services/song-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");









var SongListComponent = /** @class */ (function () {
    function SongListComponent(songService, titleService, route, userDataService, auth) {
        var _this = this;
        this.songService = songService;
        this.titleService = titleService;
        this.route = route;
        this.userDataService = userDataService;
        this.auth = auth;
        this.filterSongs = function (song) {
            var filterString = '' + song.page + song.title + song.battleCryName + song.associationName;
            return filterString.toLowerCase().indexOf(_this.filter.toLowerCase()) !== -1;
        };
        titleService.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].title);
        auth.user
            .subscribe(function (user) {
            if (user) {
                _this.userDataService.getUserData(user.uid).subscribe(function (userData) { return _this.userData = userData; });
            }
        });
        this.route.queryParamMap.subscribe(function (paramMap) { return _this.songsInit(paramMap); });
    }
    SongListComponent.prototype.ngOnInit = function () {
    };
    SongListComponent.prototype.search = function () {
        var _this = this;
        this.$songs = this.$songs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (songs) { return songs.filter(function (song) { return _this.filterSongs(song); }); }));
    };
    SongListComponent.prototype.songsInit = function (paramMap) {
        var category = paramMap.get('category');
        if (category) {
            this.$songs = this.songService.getSongsByCategory(category);
        }
        else {
            this.$songs = this.songService.getAllSongs();
        }
    };
    SongListComponent.prototype.isSongFavorite = function (id) {
        if (this.userData.favorites) {
            return !!this.userData.favorites.find(function (ref) { return ref.id === id; });
        }
        return false;
    };
    SongListComponent.prototype.updateFavorites = function (id) {
        if (this.isSongFavorite(id)) {
            this.userDataService.removeFavorite(id);
        }
        else {
            this.userDataService.addFavorite(id);
        }
    };
    SongListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-song-list',
            template: __webpack_require__(/*! raw-loader!./song-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/songs/song-list/song-list.component.html"),
            styles: [__webpack_require__(/*! ./song-list.component.scss */ "./src/app/songs/song-list/song-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_song_service__WEBPACK_IMPORTED_MODULE_2__["SongService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_user_data_service__WEBPACK_IMPORTED_MODULE_7__["UserDataService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]])
    ], SongListComponent);
    return SongListComponent;
}());



/***/ }),

/***/ "./src/app/songs/songs.component.css":
/*!*******************************************!*\
  !*** ./src/app/songs/songs.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbmdzL3NvbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/songs/songs.component.ts":
/*!******************************************!*\
  !*** ./src/app/songs/songs.component.ts ***!
  \******************************************/
/*! exports provided: SongsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsComponent", function() { return SongsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SongsComponent = /** @class */ (function () {
    function SongsComponent() {
    }
    SongsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-songs',
            template: __webpack_require__(/*! raw-loader!./songs.component.html */ "./node_modules/raw-loader/index.js!./src/app/songs/songs.component.html"),
            styles: [__webpack_require__(/*! ./songs.component.css */ "./src/app/songs/songs.component.css")]
        })
    ], SongsComponent);
    return SongsComponent;
}());



/***/ }),

/***/ "./src/app/tools/enum-to-array-pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/tools/enum-to-array-pipe.ts ***!
  \*********************************************/
/*! exports provided: EnumToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function() { return EnumToArrayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnumToArrayPipe = /** @class */ (function () {
    function EnumToArrayPipe() {
    }
    EnumToArrayPipe.prototype.transform = function (value) {
        return Object.keys(value);
    };
    EnumToArrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'enumToArray'
        })
    ], EnumToArrayPipe);
    return EnumToArrayPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */

var environment = {
    production: false,
    title: 'Codex Bruxellensis',
    databases: {
        songs: 'songs-test',
        userData: 'user-data-test'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tyranwyn/IdeaProjects/codex-bruxellensis-webapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map