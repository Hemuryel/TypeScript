console.log("-----------EmailValidator.ts-----------");

// namespace = módulo = organizar código
// regex = https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149

namespace Validation {
    let emailRegex: RegExp =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    export class EmailValidator implements Validator {
        IsValid(str: string): boolean {
            return emailRegex.test(str);
        }
    }
}