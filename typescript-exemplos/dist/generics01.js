"use strict";
console.log("-----------generics01.ts-----------");
function reverseList(list) {
    var reversedList = [];
    for (var i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}
var names = ["Luffy", "Zoro", "Sanji"];
var numbers = [1, 2, 3, 4, 5];
console.log(reverseList(names));
console.log(reverseList(names));
console.log(reverseList(numbers));
var reverseListArrow = function (list) {
    var reversedList = [];
    for (var i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
};
console.log(reverseListArrow(names));
console.log(reverseListArrow(numbers));
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    Person3.prototype.print = function () {
        console.log("name: " + this.name);
    };
    return Person3;
}());
var Person3Repository = /** @class */ (function () {
    function Person3Repository() {
    }
    Person3Repository.prototype.findById = function (id) {
        console.log("Searching using ID: " + id);
        return new Person3("Nami");
    };
    Person3Repository.prototype.save = function (entity) {
        return new Person3("Franky");
    };
    return Person3Repository;
}());
var personRepository = new Person3Repository();
console.log(personRepository.findById(3));
console.log(personRepository.save(new Person3("Ninja")));
var Person3Repository2 = /** @class */ (function () {
    function Person3Repository2() {
    }
    Person3Repository2.prototype.findById = function (numberId) {
        console.log("Searching using ID: " + numberId.id);
        return new Person3("Nami123");
    };
    Person3Repository2.prototype.save = function (entity) {
        return new Person3("Franky");
    };
    return Person3Repository2;
}());
var person3Repository2 = new Person3Repository2();
console.log(person3Repository2.findById({ id: 1 }));
