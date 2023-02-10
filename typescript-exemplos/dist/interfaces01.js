"use strict";
console.log("-----------interfaces01.ts-----------");
// o que importa é o tipo do conteúdo do parâmetro
function printName(person) {
    console.log(person.name);
}
var randomObj1 = { name: "Fulano", age: 20 };
var randomObj2 = { age: 30 };
printName(randomObj1);
var person1 = { name: "João" };
//let employee1: Employee = {name: "Maria"}; // erro
var employee1 = { name: "Maria", salary: 2000 };
printName(person1);
printName(employee1);
function printName2(person) {
    console.log("printName2 = " + person.name);
}
printName2(person1);
printName2(employee1);
printName2(randomObj1);
printName2({ name: "teste" });
printName2({ name: "teste" });
var manager = { name: "Amanda", salary: 1000, bonus: 5 };
manager.name = "Bruna";
// manager.bonus = 10; // erro
printName2(manager);
