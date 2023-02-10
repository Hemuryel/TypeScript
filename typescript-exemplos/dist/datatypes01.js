"use strict";
console.log("-----------dataypes01.ts-----------");
var p = document.createElement('p');
var ola = "Hello World!";
p.textContent = ola;
document.body.appendChild(p);
var num = 10;
var bool = true;
console.log(bool);
var str1 = "texto1";
var str2 = 'texto2';
var str3 = str1 + " - " + str2 + " texto3\n                    permite m\u00FAltiplas linhas";
console.log(str3);
if (bool) {
    var i = void 0;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}
// console.log(i); // erro
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var tuple1;
tuple1 = ["tupla1234", 0];
// tuple1 = [1, "teste1"]; // erro
console.log(tuple1[0]);
// começa a partir de 0 ou o que escolher
// se por 0 no meio = fica duplicado o 1º valor
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
})(Day || (Day = {}));
var day1 = Day.Monday;
console.log(day1);
var day2 = 1;
console.log(day2);
console.log(day1 + " - " + Day.Tuesday + " - " + Day[1]);
