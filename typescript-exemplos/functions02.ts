console.log("-----------functions02.ts-----------");

function imprimir(val: string): void{
    console.log(val);
}

imprimir("Message here");

// função normal pode ser chamado antes da criação
printOrNot(false);
printOrNot(true);

// = add valor default
function printOrNot(flag: boolean = false): void{
    // operador ternário
    // variável ? condição verdadeira: condição falsa;
    let str = flag ? "flag is true": "flag is false";
    console.log(str);
}

// função anônima
let sumAnonymous = function (n1: number, n2: number): void{
    console.log(n1 + n2);
};

// só pode ser chamado após criação da função anônima diferentemente de uma função comum
sumAnonymous(1, 2);

// arrow function
// return implícito
let sumArrow1 = (n1: number, n2: number) => console.log(n1 + n2);
sumArrow1(2, 3);

// fat arrow function
let sumArrow2 = (n1: number, n2: number): void => {
    return console.log(n1 + n2);
}
sumArrow2(2, 4);

let objArrow1 = (name:string, surname: string) => ({name: name, surname: surname});
console.log(objArrow1("Fulano", "Silva"));
