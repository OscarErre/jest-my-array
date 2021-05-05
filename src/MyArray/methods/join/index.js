export function join () {
        
    let separator = arguments[0] || ",";
    let string='';

    for (let i=0; i<this.length; i++) {
        string+=this[i];
        if (i<this.length-1) string+=separator;
    }
    return string;
}