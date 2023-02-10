console.log("-----------namespaces01.ts-----------");

// namespace = módulo = organizar código
// regex = https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149

namespace ValidationExemplo {
    let emailRegex: RegExp =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    let urlRegex: RegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    export class EmailValidator {
        isValid(str: string): boolean{
            return emailRegex.test(str);
        }
    }

    export class UrlValidator {
        static isValid(str: string): boolean{
            return urlRegex.test(str);
        }
    }
}