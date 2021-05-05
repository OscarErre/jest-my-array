export function reverse () {
     
    let ini=0;
    let fin=this.length-1;
    let item;
    
    while (ini<fin) {
        item=this[fin];
        this[fin]=this[ini];
        this[ini]=item;
        
        ini++;
        fin--;
    }
}