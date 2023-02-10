(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidatorExternal = void 0;
console.log("-----------EmailValidatorExternal.ts-----------");
var emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
var EmailValidatorExternal = /** @class */ (function () {
    function EmailValidatorExternal() {
    }
    EmailValidatorExternal.prototype.IsValid = function (str) {
        return emailRegex.test(str);
    };
    return EmailValidatorExternal;
}());
exports.EmailValidatorExternal = EmailValidatorExternal;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlValidatorExternal = void 0;
console.log("-----------URLValidatorExternal.ts-----------");
var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
var UrlValidatorExternal = /** @class */ (function () {
    function UrlValidatorExternal() {
    }
    UrlValidatorExternal.prototype.IsValid = function (str) {
        return urlRegex.test(str);
    };
    return UrlValidatorExternal;
}());
exports.UrlValidatorExternal = UrlValidatorExternal;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("-----------externalmodules01.ts-----------");
var EmailValidatorExternal_1 = require("./EmailValidatorExternal");
var URLValidatorExternal_1 = require("./URLValidatorExternal");
var emailExamples2 = ["lala@", "lala@lala", "lala@gmail.com"];
var urlExamples2 = ["google.com", "www.google.com", "http:///google.com", "http://google.com"];
emailExamples2.forEach(function (email) {
    console.log(email + " " + new EmailValidatorExternal_1.EmailValidatorExternal().IsValid(email));
});
urlExamples2.forEach(function (url) {
    console.log(url + " " + new URLValidatorExternal_1.UrlValidatorExternal().IsValid(url));
});
// install -g browserify
// unificar arquivos para funcionar no browser
// browserify dist/externalmodules01.js -o bundle.js

},{"./EmailValidatorExternal":1,"./URLValidatorExternal":2}]},{},[3]);
