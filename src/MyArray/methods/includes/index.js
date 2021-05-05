export function includes (item) {

    for (let i=0; i<this.length; i++) {
        if (this[i]===item)  return true
    }
    return false;
}