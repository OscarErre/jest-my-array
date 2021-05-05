export function unshift () {

    for (let i=((this.length-1)+(arguments.length)); i>0; i--) {
        this[i]=this[i-(arguments.length)];
    }
    for (let i=0; i<(arguments.length); i++) {
        this[i]=arguments[i];
    }
	this.length += arguments.length;
    return this.length;
}