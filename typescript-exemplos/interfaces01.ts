console.log("-----------interfaces01.ts-----------");

// o que importa é o tipo do conteúdo do parâmetro
function printName(person: {name: string}): void{
    console.log(person.name);
}

let randomObj1 = {name : "Fulano", age: 20};
let randomObj2 = {age : 30};

printName(randomObj1);
// printName(randomObj2); // erro

interface Person {
    name: string;
    age?: number; // opcional
}

interface Employee extends Person {
    salary: number;
}

let person1: Person = {name: "João"};
//let employee1: Employee = {name: "Maria"}; // erro
let employee1: Employee = {name: "Maria", salary: 2000}; 

printName(person1);
printName(employee1);

function printName2(person: Person){
    console.log("printName2 = " + person.name);
}

printName2(person1);
printName2(employee1);
printName2(randomObj1);
printName2({name:"teste"});
printName2({name:"teste"} as Employee);

// não faz override e sim adiciona a interface
interface Person {
    nova_propriedade?: number;
}

interface Manager extends Employee {
    readonly bonus: number;
}

let manager: Manager = {name: "Amanda", salary: 1000, bonus: 5}
manager.name = "Bruna";
// manager.bonus = 10; // erro
printName2(manager);