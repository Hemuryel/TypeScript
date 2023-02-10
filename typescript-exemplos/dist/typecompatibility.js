"use strict";
console.log("-----------typecompatibility.ts-----------");
var AnotherExample1 = /** @class */ (function () {
    function AnotherExample1(name) {
        this.name = name;
    }
    return AnotherExample1;
}());
var AnotherExemple2 = /** @class */ (function () {
    function AnotherExemple2(num) {
        this.num = num;
    }
    return AnotherExemple2;
}());
var exVar; // usando interface
var exVar2;
exVar = new AnotherExample1("teste"); // precisa ter pelo menos "name"
// exVar2 = new AnotherExample2("teste"); // erro, não possui "name"
var exVar3 = { name: "Brook", age: 20 };
exVar = exVar3;
exVar = { name: "Brook" };
// exVar = {name:"Brook", age:20}; // erro, estrutura deve ser a mesma de exVar
function textExample1(ex) {
    console.log(ex.name);
}
textExample1(exVar3); // precisa ter pelo menos "name
// textExample1({name:"Brook", age:20}); // erro, estrutura deve ser a mesma de exVar quando passa objeto na função
var x1 = function (a) { return a; };
var x2 = function (b, s) { return b + s; };
var x3 = function (b, s) { return b; };
console.log(x1(10));
console.log(x2(10, "something"));
// x2 = x1; // erro
x3 = x1; // compatível, pois não usa s
console.log(x3(20, "something")); // segundo argumento é descartado, no JS é comum
var items = [1, 2, 3];
items.forEach(function (item, index, array) { return console.log(item); });
items.forEach(function (item) { return console.log(item); }); // JS permite descarte de argumentos
