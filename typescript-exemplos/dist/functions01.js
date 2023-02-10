"use strict";
console.log("-----------functions01.ts-----------");
function func() {
    console.log("func()");
}
function add1(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
// ? opcional
function add2(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
// ... n parâmetros = rest parameter
function add3(v1) {
    var v2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        v2[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum);
}
func();
console.log(add1(1, 2)); // 3
console.log(add1(1, 2, 3)); // 6
console.log(add2("1", "2", "3")); // 123
add3("Sum is: ", 1, 2, 3, 4, 5);
