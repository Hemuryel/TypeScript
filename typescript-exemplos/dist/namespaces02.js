"use strict";
/*import EmailValidator = ValidationExemplo.EmailValidator;
import UrlValidator = ValidationExemplo.UrlValidator;

console.log("-----------namespaces02.ts-----------");

let emailExamples = ["lala@", "lala@lala", "lala@gmail.com"];
let urlExamples = ["google.com", "www.google.com", "http:///google.com", "http://google.com"];

emailExamples.forEach(email =>{
    console.log(`${email} ${ new EmailValidator().isValid(email)}`)
});

urlExamples.forEach(url =>{
    console.log(`${url} ${ UrlValidator.isValid(url)}`)
});*/
/// <reference path="Validation.ts" />
/// <reference path="URLValidator.ts" />
/// <reference path="EmailValidator.ts" />
// referenciar tudo em um único arquivo
// tsc --outFile dist/all.js namespaces02.ts
var EmailValidator = Validation.EmailValidator;
var UrlValidator = Validation.UrlValidator;
console.log("-----------namespaces02.ts-----------");
var emailExamples = ["lala@", "lala@lala", "lala@gmail.com"];
var urlExamples = ["google.com", "www.google.com", "http:///google.com", "http://google.com"];
emailExamples.forEach(function (email) {
    console.log(email + " " + new EmailValidator().IsValid(email));
});
urlExamples.forEach(function (url) {
    console.log(url + " " + new UrlValidator().IsValid(url));
});
