console.log("-----------dataypes01.ts-----------");


var p = document.createElement('p');
var ola: string = "Hello World!";

p.textContent = ola;

document.body.appendChild(p);

var num: number = 10;
var bool: boolean = true;
console.log(bool);

var str1: string = "texto1";
var str2: string = 'texto2';
var str3: string = `${str1 + " - " + str2} texto3
                    permite múltiplas linhas`;

console.log(str3);

if (bool) {
    let i: number;

    for (i = 0; i< 3; i++){
        console.log(i);
    }
}
// console.log(i); // erro

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let tuple1: [string, number];
tuple1 = ["tupla1234", 0];
// tuple1 = [1, "teste1"]; // erro
console.log(tuple1[0]);

// começa a partir de 0 ou o que escolher
// se por 0 no meio = fica duplicado o 1º valor
enum Day{Monday = 0, Tuesday, Wednesday} 
let day1: Day = Day.Monday;
console.log(day1);

let day2: Day = 1;
console.log(day2);

console.log(`${day1} - ${Day.Tuesday} - ${Day[1]}`)