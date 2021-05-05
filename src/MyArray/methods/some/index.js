export function some (expression) {
    
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    
    for (let i=0; i<this.length; i++) {
        if (expression(this[i])) return true;
    }
    return false;
}