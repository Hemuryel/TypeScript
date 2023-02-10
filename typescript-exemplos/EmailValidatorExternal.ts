console.log("-----------EmailValidatorExternal.ts-----------");

import { ValidatorExternal } from "./ValidatorExternal";

let emailRegex: RegExp =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

export class EmailValidatorExternal implements ValidatorExternal {
    IsValid(str: string): boolean {
        return emailRegex.test(str);
    }
}