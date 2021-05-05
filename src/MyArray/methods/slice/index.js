import { MyArray } from "../../MyArray";

export function slice () {

    let start = arguments[0] || 0;
    if (typeof(start) !== "number") start = 0;
    start = start < 0 ? this.length + start : start;
    let end = arguments[1] || this.length;
    if (typeof(end) !== "number") end = 0;
    end = end < 0 ? this.length + end : end;

    if (end > this.length) end = this.length;

    let newArray = new MyArray ();   

    for (let i=start; i<end; i++) {
        newArray[newArray.length++]=this[i];
    }
    return newArray;
}
