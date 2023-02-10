console.log("-----------externalmodules01.ts-----------");

import { EmailValidatorExternal } from "./EmailValidatorExternal";
import { UrlValidatorExternal } from "./URLValidatorExternal";

let emailExamples2 = ["lala@", "lala@lala", "lala@gmail.com"];
let urlExamples2 = ["google.com", "www.google.com", "http:///google.com", "http://google.com"];

emailExamples2.forEach(email =>{
    console.log(`${email} ${ new EmailValidatorExternal().IsValid(email)}`)
});

urlExamples2.forEach(url =>{
    console.log(`${url} ${ new UrlValidatorExternal().IsValid(url)}`)
});

// install -g browserify
// unificar arquivos para funcionar no browser
// browserify externalmodules01.js -o bundle.js