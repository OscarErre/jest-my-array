
export function fill (item) {

    let start = arguments[1] || 0;
    if (typeof(start) !== "number") start = 0;
    start = start < 0 ? this.length + start : start;
    let end = arguments[2] || this.length;
    if (typeof(end) !== "number") end = 0;
    end = end < 0 ? this.length + end : end;

    if (end > this.length) end = this.length;    

    for( let i=start; i<end; i++){
        this[i]=item;
    }
}