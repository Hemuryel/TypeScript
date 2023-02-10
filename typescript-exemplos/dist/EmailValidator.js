"use strict";
console.log("-----------EmailValidator.ts-----------");
// namespace = módulo = organizar código
// regex = https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149
var Validation;
(function (Validation) {
    var emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.IsValid = function (str) {
            return emailRegex.test(str);
        };
        return EmailValidator;
    }());
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
