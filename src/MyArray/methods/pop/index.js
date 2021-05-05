export function pop () {
    
    if (this.length===0) return undefined;

    let result = this[this.length-1];
    
    delete this[this.length-1];
    this.length-=1;
    
    return result;
} 