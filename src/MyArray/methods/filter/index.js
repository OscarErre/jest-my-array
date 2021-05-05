import { MyArray } from "../../MyArray";

export function filter (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    let results = new MyArray;

    for (let i=0; i<this.length; i++) {
        if (expression(this[i])) {
            results[results.length++]=this[i];
        }
    }
    return results;
}
