console.log("-----------URLValidatorExternal.ts-----------");

import { ValidatorExternal } from "./ValidatorExternal";

let urlRegex: RegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

export class UrlValidatorExternal implements ValidatorExternal {
    IsValid(str: string): boolean {
        return urlRegex.test(str);
    }
}