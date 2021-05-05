
export function toString () {
    let string='';
    
    for (let i=0; i<this.length; i++) {
        string+=this[i];
        if (i<this.length-1) string+=',';
    }
    return string;
}