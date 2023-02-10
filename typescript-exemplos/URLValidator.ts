console.log("-----------URLValidator.ts-----------");

// namespace = módulo = organizar código
// regex = https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149

namespace Validation {
    let urlRegex: RegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    export class UrlValidator implements Validator {
        IsValid(str: string): boolean {
            return urlRegex.test(str);
        }
    }
}