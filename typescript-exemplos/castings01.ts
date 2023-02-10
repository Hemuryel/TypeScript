console.log("-----------castings01.ts-----------");

let var1: any = "texto";

// casting
let stringLength: number = (<string> var1).length;
let stringUpperCase: string = (var1 as string).toUpperCase();

console.log(stringLength);
console.log(stringUpperCase);