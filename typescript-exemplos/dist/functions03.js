"use strict";
console.log("-----------functions03.ts-----------");
console.log(this); // retorna window
var objExample = {
    name: 'Jiraya',
    lastName: "Ninja",
    fullName: function () {
        return this; // retorna o objeto
    },
    /*fullName2: () => {
        return this; // retorna window
    },*/
    thisExample: this
};
console.log(objExample.name);
console.log(objExample.fullName());
//console.log(objExample.fullName2());
console.log(objExample.thisExample);
var lottery = {
    names: ["Gon", "Killua", "Leorio"],
    test: "lalala",
    createLotteryPicker: function () {
        var _this = this;
        console.log("first level this: " + this.names + this.test);
        return function () {
            console.log("second level this: " + _this);
            var pickedPersonNumber = Math.floor(Math.random() * 3);
            return { name: _this.names[pickedPersonNumber] };
        };
    }
};
var personPicker = lottery.createLotteryPicker();
var pickedPerson = personPicker();
console.log(pickedPerson);
