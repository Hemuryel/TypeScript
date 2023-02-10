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
