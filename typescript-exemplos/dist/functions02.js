"use strict";
console.log("-----------functions02.ts-----------");
function imprimir(val) {
    console.log(val);
}
imprimir("Message here");
// função normal pode ser chamado antes da criação
printOrNot(false);
printOrNot(true);
// = add valor default
function printOrNot(flag) {
    if (flag === void 0) { flag = false; }
    // operador ternário
    // variável ? condição verdadeira: condição falsa;
    var str = flag ? "flag is true" : "flag is false";
    console.log(str);
}
// função anônima
var sumAnonymous = function (n1, n2) {
    console.log(n1 + n2);
};
// só pode ser chamado após criação da função anônima diferentemente de uma função comum
sumAnonymous(1, 2);
// arrow function
// return implícito
var sumArrow1 = function (n1, n2) { return console.log(n1 + n2); };
sumArrow1(2, 3);
// fat arrow function
var sumArrow2 = function (n1, n2) {
    return console.log(n1 + n2);
};
sumArrow2(2, 4);
var objArrow1 = function (name, surname) { return ({ name: name, surname: surname }); };
console.log(objArrow1("Fulano", "Silva"));
