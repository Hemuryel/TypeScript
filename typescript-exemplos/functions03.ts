console.log("-----------functions03.ts-----------");

console.log(this); // retorna window

let objExample = {
    name: 'Jiraya',
    lastName: "Ninja",
    fullName: function(){
        return this; // retorna o objeto
    },
    /*fullName2: () => {
        return this; // retorna window
    },*/
    thisExample: this
}

console.log(objExample.name);
console.log(objExample.fullName());
//console.log(objExample.fullName2());
console.log(objExample.thisExample);

let lottery = {
    names: ["Gon", "Killua", "Leorio"],
    test: "lalala",
    createLotteryPicker: function(){
        console.log("first level this: " + this.names + this.test);

        return () => {
            console.log("second level this: " + this);
            let pickedPersonNumber = Math.floor(Math.random() * 3);
            return {name:this.names[pickedPersonNumber]};
        }
    }
};

let personPicker = lottery.createLotteryPicker();
let pickedPerson = personPicker(); 

console.log(pickedPerson);