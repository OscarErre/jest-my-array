export function indexOf (item) {
    let start = arguments[1] || 0;

    if (typeof(start) !== "number") start=0;

    start = start < 0 ? this.length + start : start;

    for (let i=start; i<this.length; i++) {
        if (this[i]===item) return i;
    }
    return -1;
}
