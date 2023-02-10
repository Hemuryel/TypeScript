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
