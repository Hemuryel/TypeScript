"use strict";
console.log("-----------namespaces01.ts-----------");
// namespace = módulo = organizar código
// regex = https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149
var ValidationExemplo;
(function (ValidationExemplo) {
    var emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isValid = function (str) {
            return emailRegex.test(str);
        };
        return EmailValidator;
    }());
    ValidationExemplo.EmailValidator = EmailValidator;
    var UrlValidator = /** @class */ (function () {
        function UrlValidator() {
        }
        UrlValidator.isValid = function (str) {
            return urlRegex.test(str);
        };
        return UrlValidator;
    }());
    ValidationExemplo.UrlValidator = UrlValidator;
})(ValidationExemplo || (ValidationExemplo = {}));
