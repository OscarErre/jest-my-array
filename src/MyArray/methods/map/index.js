import { MyArray } from "../../MyArray";

export function map (expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');    
    
    let newArray = new MyArray ();
    for (let i=0; i<this.length; i++) {
		newArray[newArray.length++]=expression(this[i]);
    }

    return newArray;
}