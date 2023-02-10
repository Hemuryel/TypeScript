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
