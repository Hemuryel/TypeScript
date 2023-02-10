console.log("-----------Validator.ts-----------");

namespace Validation {
    export interface Validator{
        IsValid(str: string): boolean;
    }
}