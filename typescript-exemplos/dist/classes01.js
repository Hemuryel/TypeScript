"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("-----------classes01.ts-----------");
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.print = function () {
        console.log("name: " + this.name);
    };
    return Person2;
}());
var EmployeePF = /** @class */ (function (_super) {
    __extends(EmployeePF, _super);
    function EmployeePF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EmployeePF;
}(Person2));
var EmployeePJ = /** @class */ (function (_super) {
    __extends(EmployeePJ, _super);
    function EmployeePJ(name, salary) {
        var _this = _super.call(this, name) || this;
        _this._salary = salary;
        return _this;
    }
    Object.defineProperty(EmployeePJ.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    //sobrescrita
    EmployeePJ.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("salary: " + this.salary);
    };
    return EmployeePJ;
}(Person2));
var p1 = new Person2("Natsu");
var emp1 = new EmployeePF("Pedro");
var emp2 = new EmployeePJ("Roberta", 1200);
emp1.print();
emp2.print();
// casting
var p2 = { name: "Fabiana" };
var p3 = { name: "Luan" };
var p4 = {};
p4.name = "Delta";
var p7 = new Person2("Gabriel");
var emp3 = new EmployeePJ("ECHO", 4500);
p7.print();
emp3.salary = 3000; // usando SET
emp3.print();
var p8 = {};
var p9 = new EmployeePJ("Lucy", 2000);
// polimorfismo
p9.print();
