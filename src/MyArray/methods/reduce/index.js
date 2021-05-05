export function reduce (expression) {
    
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    if (this.length === 0) throw TypeError("Reduce of empty array with no initial value");
    
    let result=0;
    for (let i=0; i<this.length; i++) {
        result=expression(result,this[i]);
    }
    
    return result;
}