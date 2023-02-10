console.log("-----------typecompatibility.ts-----------");

interface Example1{
    name: string;
}

class AnotherExample1 {
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

class AnotherExemple2 {
    num: number;

    constructor(num: number){
        this.num = num;
    }
}

let exVar: Example1; // usando interface
let exVar2: Example1; 

exVar = new AnotherExample1("teste"); // precisa ter pelo menos "name"
// exVar2 = new AnotherExample2("teste"); // erro, não possui "name"

let exVar3 = {name:"Brook", age:20};
exVar = exVar3;
exVar = {name:"Brook"};
// exVar = {name:"Brook", age:20}; // erro, estrutura deve ser a mesma de exVar

function textExample1(ex: Example1){
    console.log(ex.name)
}

textExample1(exVar3); // precisa ter pelo menos "name
// textExample1({name:"Brook", age:20}); // erro, estrutura deve ser a mesma de exVar quando passa objeto na função

let x1 = (a: number) => a;
let x2 = (b: number, s:string) => b + s;
let x3 = (b: number, s:string) => b;

console.log(x1(10));
console.log(x2(10, "something"));

// x2 = x1; // erro
x3 = x1; // compatível, pois não usa s
console.log(x3(20, "something")); // segundo argumento é descartado, no JS é comum

let items = [1, 2, 3];
items.forEach((item, index, array) => console.log(item));
items.forEach((item) => console.log(item)); // JS permite descarte de argumentos