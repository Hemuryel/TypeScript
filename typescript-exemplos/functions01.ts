console.log("-----------functions01.ts-----------");

function func(): void{
    console.log("func()");
}

function add1(v1: number, v2: number, v3?: number): number{
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}

// ? opcional
function add2(v1: any, v2: any, v3?: any): any{
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}

// ... n parâmetros = rest parameter
function add3(v1: string, ...v2: number[]): void{
    let sum: number = 0;
    for (let i: number = 0; i < v2.length; i++){
        sum += v2[i];
    }
    console.log(v1 + sum);
}

func();
console.log(add1(1,2)); // 3
console.log(add1(1,2,3)); // 6
console.log(add2("1","2","3")); // 123
add3("Sum is: ", 1, 2, 3, 4, 5);